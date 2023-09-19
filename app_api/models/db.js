const mongoose = require('mongoose')

const pass = 'tinkulovesweety'


mongoose.connect(`mongodb+srv://anvesh1379:${pass}@cluster0.iyynvs9.mongodb.net/?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful!");
  });
