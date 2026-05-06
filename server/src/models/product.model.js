import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: { 
        type: String 
    },    
    price: {
        type: Number
    },
    description: { 
        type: String 
    },
    instock: {
        type: Boolean
    },
});
export const Product = mongoose.models?.Product || mongoose.model("Product", productSchema);