const mongoose = require('mongoose')

//This is a Demo of a model


//User Schema
const UserSchema = mongoose.Schema(
    {
        username:{
            typw:String,
            require:true
        },
        password:{
            typw:String,
            require:true
        }
    }
)

const User = module.exports = mongoose.model('User',UserSchema,'CollecTionName')