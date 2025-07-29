
const AdminModel = require("../../models//AdminModel/AdminModel.js");

exports.adminLogin = (req, res) => {
    const { email, password } = req.body;

    AdminModel.checkEmailExists(email)
        .then((result) => {
            if (result.length === 0) {
                res.send("Email not found");
            } else {
                const admin = result[0];

                if (admin.password === password) {
                    res.send("Login successful");
                } else {
                    res.send("Invalid password");
                }
            }
        })
        .catch((err) => {
            console.error("Login error:", err);
     
        });
};
