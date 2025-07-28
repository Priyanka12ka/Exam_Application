const db = require("../../db.js");

exports.checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM admin WHERE email = ?";
        db.query(query, [email], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.registerAdmin = (name, contact, email, password) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO admin (name, contact, email, password) VALUES (?, ?, ?, ?)";
        db.query(query, [name, contact, email, password], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};
