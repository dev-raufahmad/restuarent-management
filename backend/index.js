require('dotenv').config();
const express = require('express');
const homeRouter = require('./route/home.route.js');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const restaurantRouter = require('./route/restaurant.route.js');

const app = express();
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    credentials: true
}));

app.use( express.json() );
app.use( cookieParser() );



app.listen(process.env.PORT , () => {
    console.log("Server is running on the port number : " , process.env.PORT);
})


app.get('/health',(req , res) => {
    return res.json({
        message : "Successful"
    })
}) 


app.use('/' , homeRouter )
app.use('/restuarants' , restaurantRouter )