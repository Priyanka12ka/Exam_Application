const StudentModel = require("../../models/StudentModel/StudentRegisterLogin.js");

exports.registerStudent = async (req, res) => {
  const { name, contact, email, username, password } = req.body;
  console.log(name);
  await StudentModel.checkStudentExists(email, username)
    .then(async result => {
      if (result.length > 0) {
        res.status(404).json({ "msg": "Email or username already exists" });
      } else {
        await StudentModel.registerStudent(name, contact, email, username, password)
          
      }
    })
    .catch(err => {
      console.error("Check error:", err);
      res.send("Something went wrong");
    });
};

exports.loginStudent = (req, res) => {
  const { username, password } = req.body;

  StudentModel.loginStudent(username, password)
    .then(result => {
      if (result.length > 0) {
        res.send("Login successful");
      } else {
        res.send("Invalid username or password");
      }
    })
    .catch(err => {
      console.error("Login error:", err);
      res.send("Error while logging in");
    });
};
