/* GET 'home' page */
const about = (req, res) => {
    res.render('generic-text', { title: 'About' });
   };
module.exports = {
    about
   };

/* GET 'signin' page */
module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
}
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
 }