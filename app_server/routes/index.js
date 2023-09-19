const express = require('express');
const router = express.Router();
const ctrlLocations =require('../controllers/location');
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlOthers.signin);
router.get('/register', ctrlOthers.register);
module.exports = router;
