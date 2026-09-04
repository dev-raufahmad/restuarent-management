const express = require('express');
const {bookingRequest , getRestauants ,reserveTable, comments , availableTimes, upcomingRequest, diningHistory, recommendedRestaurants } = require('../controller/restaurant.controller.js');

const router = express.Router();

router.get('/' , getRestauants );
router.get('/comments/:id' , comments );
router.get('/available-times/:id/:date' , availableTimes );
router.post("/reserve/:id" , reserveTable);
router.get('/bookings/:id' , bookingRequest);
router.get('/upcoming-bookings/:id' , upcomingRequest)
router.get('/dining-history/:id' , diningHistory)
router.get('/recommended' , recommendedRestaurants)
module.exports = router;