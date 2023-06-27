const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/doubt";

const connectToMongo = () =>{
    mongoose.connect(process.env.mongoURI || mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;

