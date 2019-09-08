const express = require('express');
const airportsSanitizer = require('./aitrports.sanitizer');
const AirportsController = require('./airports.controller');
const asyncHandler = require('../../utils/asyncHandler');

const router = express.Router();

router.get('/', airportsSanitizer, asyncHandler(AirportsController.getAirports));

module.exports = router;
