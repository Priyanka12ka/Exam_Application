const AdminModel = require("../../models/AdminModel");

exports.registerAdminn = (req, res) => {
    const { name, contact, email, password } = req.body;

    AdminModel.checkEmailExists(email)
        .then((result) => {
            if (result.length > 0) {
                res.send("Email already registered");
            } else {
                return AdminModel.registerAdmin(name, contact, email, password)
                    .then(() => {
                        res.send("Admin registered successfully");
                    });
            }
        })
        .catch((err) => {
            console.error("Error:", err);
            res.send("Something went wrong");
        });
};

exports.adminLogin=(req,res)=>{
    const{email,password} = req.body;
      AdminModel.checkEmailExists(email)
        .then((result) => {
            if (result.length === 0) {
                res.send("Email not found. Please register.");
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
            res.status(500).send("Server error");
        });
};

