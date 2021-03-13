const mongoose = require('mongoose');

// To pull the string for mongodb atlas connection
const config = require('config');

const db = config.get('mongoURI');   //To get mongoURI in the variable db.


const connectDB = async () => {
    try {
        await mongoose.connect(db, { useUnifiedTopology: true,  useNewUrlParser: 
            true, useCreateIndex:true });

        console.log('Mongodb connected...');
    }
    catch(err){
        console.error(err.message);

        // Exit process with failure
        process.exit(1);
    }
} 

module.exports = connectDB;