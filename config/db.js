// import mongoose
const mongoose= require('mongoose');
// import config package to get from json 
const config= require('config');
// get link to connect to our data base
const db= config.get('mongoURI');

const connectDB = async ()=>{
    try{
      await mongoose.connect(db,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });

      console.log('MongoDB Connected...');
    } catch(err){
        console.error(err.message);
        // Exit process with failure
        process.exit(1);

    }
}
module.exports = connectDB;