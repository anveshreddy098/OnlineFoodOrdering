const express = require('express');
const router = express.Router();
const ctrlLocations =require('../controllers/location');
const ctrlOthers = require('../controllers/others');
const { Location } = require('../../app_api/models/location');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationId', ctrlLocations.locationInfo);
router.get('/location/:locationId/reviews/new', ctrlLocations.addReview_get);

router.post('/location/:locationId/reviews/new', ctrlLocations.addReview_post);

router.get('/locations/new', (req, res)=>{
    res.render('location-form');
});
router.post('/locations/new', async (req, res)=>{
    const body = req.body;
    const loc = new Location(body);
    loc.save()
    res.redirect('/');
})





/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlOthers.signin);
router.get('/register', ctrlOthers.register);
module.exports = router;
