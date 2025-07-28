const AdminModel = require("../models/AdminModel.js");

exports.registerAdmin = (req, res) => 
    {
        const { name, contact, email, password } = req.body;

    AdminModel.checkEmailExists(email)
        .then((result) => {
            if (result.length > 0) {
                return res.status(409).json({ message: "Email already registered" });
            }
            return AdminModel.registerAdmin(name, contact, email, password);
        })
        .then(() => {
            res.status(201).json({ message: "Admin registered successfully" });
        })
        .catch((err) => {
            console.error("Error:", err);
            res.status(500).json({ message: "Server error" });
        });
};
