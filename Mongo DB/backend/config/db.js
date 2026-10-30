const mongoose = require('mongoose')

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URL).then(()=> {
        console.log('mongodb connected');
        
    })
    
}

module.exports = connectDB