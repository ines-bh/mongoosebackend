// require mongoos
const mongoose= require('mongoose')

// schema

const{Schema}= mongoose

// create contactschema
const contactSchema = new Schema({
    name:{
type:String,
required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    Phone: Number
})


module.exports=Contact=mongoose.model('contact',contactSchema)