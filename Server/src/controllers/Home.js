exports.Header = (req, res) => {
  res.render("Header.ejs");
};

exports.gethomepage = (req, res) => {
  
res.json({ title: "Home Page" });

};

exports.getAboutPage = (req, res) => {
  res.render("about.ejs");
};
exports.getContactPage=(req,res)=>
{
  res.render("Contact.ejs");
}