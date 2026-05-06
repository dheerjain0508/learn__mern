import mongoose from "mongoose";    
const schoolSchema = new mongoose.Schema({
    name: { 
        type: String 
    },
    city: {
        type: String
    }
 })
module.exports = schoolSchema;