var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Data


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/indexHome.html"))
})
//home page
app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})
//project page
app.get("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/indexProject.html"))
})
//task page
app.get("/task", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/indexTasks.html"))
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});