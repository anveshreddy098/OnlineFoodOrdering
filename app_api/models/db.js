const mongoose = require('mongoose')
require('dotenv').config()
const dbURI = process.env.dbURI
=
mongoose.connect('mongodb://127.0.0.1:27017',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected to DB'))
.catch(console.error);
