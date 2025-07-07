const express = require("express");
const app = express();
const path = require("path"); 
const ejsMate = require("ejs-mate"); 

app.engine('ejs', ejsMate); //ejs-mate
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //set file
app.use(express.static(path.join(__dirname, "/public"))); //for using statc file like css,js files




app.get("/", (req,res) => {
    res.render("listings/index.ejs");
});

app.get("/education", (req,res)=>{
    res.render("listings/education.ejs");
});

app.get("/project", (req,res)=>{
    res.render("listings/project.ejs");
});

// app.listen("8080", ()=>{
// console.log("listening the PORT 8080");
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
