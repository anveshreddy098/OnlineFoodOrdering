
const {Review, Location} = require('../../app_api/models/location')


/* GET 'home' page */
const homelist = async (req, res) => {
    const locations = await Location.find();
    res.render('locations-list', {locations});

   };
   /* GET 'Location info' page */
   const locationInfo = async (req, res) => {
    const { locationId } = req.params;
    try {
        const location = await Location.findById(locationId).populate('reviews.review');
        res.render('location-info', { title: 'Location info', location: location });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching location information');
    }
};

   /* GET 'Add review' page */
const addReview_post = async (req, res) => {
    const {name, rating, review} = req.body;
    const {locationId} = req.params;
    try {
        const newReview = new Review({
            author: name,
            rating: rating,
            reviewText: review,
        })
        newReview.save();

        const location = await Location.findById(locationId);
        location.reviews.push({review: newReview});
        location.save();

        console.log('saved successfully')
    } catch(error){
        console.error(error)
    }
    res.redirect('/')
   };


const addReview_get = (req, res) => {
    res.render('location-review-form', {title: 'Add review'})
}


module.exports = {
    homelist,
    locationInfo,
    addReview_post,
    addReview_get
   };