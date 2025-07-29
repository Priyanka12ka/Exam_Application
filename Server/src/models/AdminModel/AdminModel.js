
const db = require("../../../db.js");

exports.checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        db.query("select * from admins where email = ?", [email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
