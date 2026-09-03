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


const comments = async (req , res) => {
    const { id } = req.params;
    const data = await pool.query("SELECT U.NAME , C.RATING , C.REVIEW FROM comments C JOIN USERS U ON C.user_id = U.id WHERE restaurant_id = $1 LIMIT 3", [id]);
    console.log("The comment we are sedning are : " , data.rows);
    return res.status(200).json({
        comments: data.rows
    });
}
module.exports = { getRestauants, comments };