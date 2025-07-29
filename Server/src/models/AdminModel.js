const db = require("../../db.js");

exports.checkEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        db.query("select * from admins where email = ?", [email], (err, result) => {
            if (err){
               
                reject(err);

            } 
            else
                { 
                    resolve(result);
                }
        });
    });
};

exports.registerAdmin = (name, contact, email, password) => {
    return new Promise((resolve, reject) => {
        db.query("insert into admins (name, contact, email, password) values (?, ?, ?, ?)",[name, contact, email, password],
            (err, result) => {
                if (err){
                
                reject(err);

            } 
                { 
                    resolve(result);
                }
            }
        );
    });
};
