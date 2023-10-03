const mongoose = require('mongoose')
require('dotenv').config()
const dbURI = process.env.dbURI
=
mongoose.connect('mongodb+srv://anvesh1379:tinkulovesweety@cluster0.iyynvs9.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected to DB'))
.catch(console.error);
