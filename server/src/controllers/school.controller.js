import schoolSchema from "../models/school.model.js";
const createSchool = async (req, res) => {
    const { name, city } = req.body;
    try {
        if (!name || !city) {
            return res.status(400).json({ msg: "Please enter all the fields" });
        }
        const school = new schoolSchema({ ...req.body });
        await school.save();
        return res.status(201).json({ msg: "School created", data: school });
    } catch (err) {
        return res.status(500).json({ msg: "Sever error", error: err.message });
    }
}   