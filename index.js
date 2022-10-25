const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.port || 5000;
app.use(cors());
const courses = require("./courses.json");

app.get("/", (req, res) => {
  res.send(courses);
});


app.get("/courses/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const course= courses.find(cr=> cr.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
