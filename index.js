const express = require("express");
const app = express();
const cors = require("./src/cors");
const rawdata = require("./src/rawdata");
const titles = require("./src/titles");
const children = require("./src/children");
const bookmarks = JSON.parse(rawdata);

const titlesArr = titles(bookmarks);

app.get("/headers", cors, function(req, res) {
  res.json(titlesArr);
});

app.get("/bookmark/:id", cors, function(req, res) {
  const id = req.params.id;
  res.json(children(bookmarks, id));
});

app.listen(3000, () => console.log("listening on 9050"));
