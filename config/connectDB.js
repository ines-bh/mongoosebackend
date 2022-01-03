// require mongoose

const mongoose = require('mongoose');

const connectDB=async()=>{
try {
    await mongoose.connect(process.env.mongo_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log('Database is connected...')
    
} catch (error) {
    console.log('can not connected Database...')
}

}

module.exports=connectDB