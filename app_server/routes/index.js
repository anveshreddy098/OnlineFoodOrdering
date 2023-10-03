const express = require('express');
const router = express.Router();
const ctrlLocations =require('../controllers/location');
const ctrlOthers = require('../controllers/others');
const {Item } = require('../../app_api/models/location');
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
    try {
        body.price = parseInt(body.price);
        body.rating = parseInt(body.rating) || 5;
        body.image = '/images/' + body.image + '.jpeg';
        const item = new Item(body);
        item.save()
        res.redirect('/');        
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})





/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlOthers.signin);
router.get('/register', ctrlOthers.register);
module.exports = router;
