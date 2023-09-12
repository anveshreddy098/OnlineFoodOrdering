/* GET 'home' page */
const homelist = (req, res) => {
<<<<<<< HEAD
    res.render('locations-list', { title: 'Home' });
   };
   /* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
=======
    res.render('index', { title: 'Home' });
   };
   /* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('index', { title: 'Location info' });
>>>>>>> 7bd0f00d9478c6e0858004643b57ce8ae9510eaf
   };
   /* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('index', { title: 'Add review' });
   };
module.exports = {
    homelist,
    locationInfo,
    addReview
   };