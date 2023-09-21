
const {Review} = require('../../app_api/models/location')


/* GET 'home' page */
const homelist = async (req, res) => {

        res.render('locations-list', { title: 'Home' });

   };
   /* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });

   };
   /* GET 'Add review' page */
const addReview_post = async (req, res) => {
    const {name, rating, review} = req.body
    try {
        const newReview = new Review({
            author: name,
            rating: rating,
            reviewText: review,
        })
        newReview.save();
        console.log('saved successfully')
    } catch(error){
        console.error(error)
    }
    res.redirect('/location')
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