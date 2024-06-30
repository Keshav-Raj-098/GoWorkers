import mongoose from "mongoose";

const customerSchema = mongoose.Schema({

    name: {
        type: String,
        required:true,
    },
    username:{
        type: String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true

    },
    email:{
        type: String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true

    },
    phonenumber:{
        type: Number,
        required:true,
        trim:true,
    },
    localaddress:{
        type: String,
        required:true,
    },
    pincode:{
        type:Number,
        required:true
    },
    town:{
        type:String
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    photo:{
        type:String, // cloudnary url
    },
    password:{
        type: String,
        required:[true,'password is required']
    },
    
    refreshToken:{
        type: String //just long strings

    }


},{timestamps:true})

const Customer = mongoose.model("Customer", customerSchema)