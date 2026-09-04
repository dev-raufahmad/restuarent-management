const pool = require("../config/pg.config.js");

const getRestauants = async (req, res) => {
    try {
        const { cuisine, location, price, filter, page = 1 } = req.query;

        let query = `SELECT * FROM restaurants WHERE 1 = 1`;
        const values = [];

        if (cuisine) {
            values.push(cuisine.split(","));
            query += ` AND cuisine = ANY($${values.length})`;
        }

        if (location) {
            values.push(location);
            query += ` AND location = $${values.length}`;
        }

        if (price) {
            values.push(Number(price));
            query += ` AND price <= $${values.length}`;
        }

        if (filter === "ascending") {
            query += ` ORDER BY price ASC`;
        } else if (filter === "descending") {
            query += ` ORDER BY price DESC`;
        } else {
            query += ` ORDER BY id DESC`;
        }

        const limit = 10;
        const offset = (Number(page) - 1) * limit;

        values.push(limit);
        query += ` LIMIT $${values.length}`;

        values.push(offset);
        query += ` OFFSET $${values.length}`;

        console.log("QUERY:", query);
        console.log("VALUES:", values);

        const result = await pool.query(query, values);
        console.log("The result of the fiding of the restuarants in the get resturants is : " , result.rows);
        
        return res.status(200).json({
            restaurants: result.rows,
            page: Number(page),
            count: result.rows.length
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching restaurants"
        });
    }
};

const recommendedRestaurants = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT *
             FROM RESTAURANTS
             ORDER BY ID DESC
             LIMIT 3`
        );

        return res.status(200).json({ restaurants: result.rows });
    } catch (error) {
        console.error("Error fetching recommended restaurants:", error);
        return res.status(500).json({ message: "Error fetching recommended restaurants" });
    }
};


const comments = async (req , res) => {
    const { id } = req.params;
    const data = await pool.query("SELECT U.NAME , C.RATING , C.REVIEW FROM comments C JOIN USERS U ON C.user_id = U.id WHERE restaurant_id = $1 LIMIT 3", [id]);
    console.log("The comment we are sedning are : " , data.rows);
    return res.status(200).json({
        comments: data.rows
    });
}


const availableTimes = async ( req , res ) => {
    console.log("We have been in the available time and the params are : " , req.params);
    const result = await pool.query('SELECT TIME FROM SLOTS S WHERE RESTAURANT_ID = $1 AND S.TIME NOT IN (SELECT TIME FROM HISTORY WHERE RESTAURANT_ID = $1 AND DATE = $2)', [req.params.id, req.params.date]);
    console.log("Log the result is : \n" , result.rows);
    return res.status(200).json({
        times: result.rows
    });
} 


const reserveTable = async ( req , res ) => {
    const query = await pool.query('SELECT * FROM HISTORY WHERE RESTAURANT_ID = $1 AND DATE = $2 AND TIME = $3', [req.params.id, req.body.date, req.body.time]);
    console.log("The result of the query that is cheking for availablance of time result's is : " , query.rows);
    
    if(query.rows.length !== 0){
        return res.status(300).json({
            message: "The time is not available"
        })
    }
    console.log("Here is the start of the inserting");
    
    await pool.query('INSERT INTO HISTORY (USER_ID , RESTAURANT_ID , DATE , TIME , GUEST , STATUS) VALUES ($1 , $2 , $3 , $4 , $5 , $6)', [req.body.id, req.params.id, req.body.date, req.body.time, req.body.guests, 'confirmed']);
    console.log("We are sending the res as 200");
    
    return res.status(200).json({
        message: "Table reserved successfully"
    });
}

const bookingRequest = async ( req , res ) => {
    try {
        const query = await pool.query('SELECT R.NAME , R.ADDRESS , B.DATE , B.TIME , B.NUMBER_OF_GUEST , B.ID FROM BOOKING_REQUESTS B JOIN USERS U ON B.USER_ID = U.ID JOIN RESTAURANTS R ON B.RESTAURANT_ID = R.ID WHERE U.ID = $1 LIMIT 3 OFFSET $2' , [ req.params.id , (Number(req.query.page)-1)*3 ])
    console.log("THe result is : " , query.rows);
    return res.json({ bookings : query.rows})
    } catch (error) {
        console.log("Error in the booking requests");
        
        return res.json({})
    }
}

const upcomingRequest = async ( req , res ) => {
    try {
        const page = Math.max(Number(req.query.page) || 1, 1);
        const limit = 3;
        const offset = (page - 1) * limit;

        const result = await pool.query(
            `SELECT
                                H.ID AS id,
                                R.NAME AS restaurant,
                R.ADDRESS AS location,
                                H.DATE AS date,
                                H.TIME AS time,
                                H.GUEST AS guests,
                                H.STATUS AS status
                         FROM HISTORY H
                         JOIN USERS U ON U.ID = H.USER_ID
                         JOIN RESTAURANTS R ON R.ID = H.RESTAURANT_ID
                         WHERE U.ID = $1
                             AND (H.DATE > CURRENT_DATE
                                        OR (H.DATE = CURRENT_DATE AND H.TIME > CURRENT_TIME))
                         ORDER BY H.DATE ASC, H.TIME ASC
             LIMIT $2 OFFSET $3`,
            [req.params.id, limit, offset]
        );
        console.log("The result from the upcoming booking is : " , result.rows);
        
        return res.status(200).json({ bookings: result.rows });
    } catch (error) {
        console.error("Error fetching upcoming booking requests:", error);
        return res.status(500).json({ message: "Error fetching upcoming booking requests" });
    }
}

const diningHistory = async ( req , res ) => {
    try {
        const page = Math.max(Number(req.query.page) || 1, 1);
        const limit = 3;
        const offset = (page - 1) * limit;

        const result = await pool.query(
            `SELECT
                H.ID AS id,
                R.NAME AS restaurant,
                H.DATE AS date,
                H.TIME AS time,
                H.GUEST AS guests,
                H.STATUS AS status,
                C.REVIEW AS review
             FROM HISTORY H
             JOIN USERS U ON U.ID = H.USER_ID
             JOIN RESTAURANTS R ON R.ID = H.RESTAURANT_ID
             LEFT JOIN COMMENTS C
                ON C.USER_ID = H.USER_ID
               AND C.RESTAURANT_ID = H.RESTAURANT_ID
             WHERE U.ID = $1
               AND (H.DATE < CURRENT_DATE
                    OR (H.DATE = CURRENT_DATE AND H.TIME < CURRENT_TIME))
             ORDER BY H.DATE DESC, H.TIME DESC
             LIMIT $2 OFFSET $3`,
            [req.params.id, limit, offset]
        );

        return res.status(200).json({ bookings: result.rows });
    } catch (error) {
        console.error("Error fetching dining history:", error);
        return res.status(500).json({ message: "Error fetching dining history" });
    }
}
module.exports = { diningHistory, upcomingRequest, bookingRequest, getRestauants, recommendedRestaurants, comments, availableTimes, reserveTable };