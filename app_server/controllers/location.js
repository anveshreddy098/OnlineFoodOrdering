
const {Review, Item} = require('../../app_api/models/location')


/* GET 'home' page */
const homelist = async (req, res) => {
    const items = await Item.find();
    res.render('locations-list', {items});

   };
   /* GET 'Location info' page */
   const locationInfo = async (req, res) => {
    const { locationId } = req.params;
    try {
        const item = await Item.findById(locationId).populate('reviews.review');
        res.render('location-info', { title: 'Location info', item: item });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching Item information');
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

        const item = await Item.findById(locationId);
        item.reviews.push({review: newReview});
        item.save();
        console.log('saved successfully')
        res.redirect('/');
    } catch(error){
        console.error(error)
        res.status(500).send('Internal Server Error');
    }
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