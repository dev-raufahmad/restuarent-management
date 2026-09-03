const express = require('express');
const { getRestauants , comments } = require('../controller/restaurant.controller.js');

const router = express.Router();

router.get('/' , getRestauants );
router.get('/comments/:id' , comments );

module.exports = router;