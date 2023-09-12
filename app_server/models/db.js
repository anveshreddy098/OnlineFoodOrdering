const mongoose = require('mongoose');
const mongodb = 'mongodb://localhost:27017/ONLINE_FOOD_ORDERING';
mongoose.connect(mongodb, {useNewUrlParser: true});
mongoose.connection.on('connected',()=>{
    console.log(`Mongoose connected to ${'dbURI'}`,mongodb);
});
mongoose.connection.on('error', err=>{
    console.log('Mongoose connection error :',err);
});
mongoose.connection.on('disconnected',()=>{
    console.log(`Mongoose disconnected`);
});
require('./locations');
