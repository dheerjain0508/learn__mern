import mongoose from "mongoose";
 const studentSchema = new mongoose.Schema({
    name: { 
        type: String
         },
    email: { 
        type: String,
        unique: true 
    },
    password: { 
        type: String 
    },
 })
 export const Student = mongoose.models?.Student || mongoose.model("Student", studentSchema);