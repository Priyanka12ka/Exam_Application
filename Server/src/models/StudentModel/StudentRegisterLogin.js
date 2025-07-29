const db = require("../../../db.js");

exports.checkStudentExists = (email, username) => {
  return new Promise((resolve, reject) => {
    const sql = ("select * from students where email = ? or username = ?", [email, username], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

exports.registerStudent = (name, contact, email, username, password) => {
  return new Promise((resolve, reject) => {
    const sql = ("insert into students (name, contact, email, username, password) values (?, ?, ?, ?, ?)", [name, contact, email, username, password], (err, result) => {
      if (err) reject(err);
      else resolve(result);

    });
  }).then(() => 
    { "msg" : "Student registered successfully" })
    .catch(err => {
      console.error("Insert error:", err);
      res.send("Error while registering");
    });

}

exports.loginStudent = (username, password) => {
  return new Promise((resolve, reject) => {
    const sql = ("select * from students where username = ? and password = ?", [username, password], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
