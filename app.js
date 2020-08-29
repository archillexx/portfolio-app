const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home", {
    pageTitle: "Ashwin"
  });
})

app.get("/about", function(req, res) {
  res.render("about", {
    pageTitle: "About-Ashwin"
  });
})

app.get("/contact", function(req, res) {
  res.render("contact", {
    pageTitle: "Contact-Ashwin"
  });
})




app.listen(process.env.PORT || 8899, function() {
  console.log("Server running Successfully");
})
