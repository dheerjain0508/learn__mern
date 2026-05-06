import Product from "../models/product.model.js";
const createproduct = async (req, res) => {
    const { name, price, description, instock } = req.body;
    try{
        if(!name || !price || !description || !instock){
            return res.status(400).json({ msg: "Please enter all the fields" });
        }
        const product = new Product({ ...req.body });
        await product.save();
        return res.status(201).json({ msg: "Product created", data: product });
    }
    catch (err){
        return res.status(500).json({ msg: "Sever error", error: err.message });
    }
};
export { createproduct }; 