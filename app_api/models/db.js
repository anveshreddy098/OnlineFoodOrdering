const mongoose = require('mongoose')
require('dotenv').config()
const dbURI = process.env.dbURI
console.log(dbURI)
mongoose.connect(dbURI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected to DB'))
.catch(console.error);
