const express = require("express");
const app = express();
const rawdata = fs.readFileSync("/data/json/Bookmarks");

const bookmarks = JSON.parse(rawdata);

console.log(bookmarks.roots.bookmark_bar.children[0].name);

for (let i = 0; i < bookmarks.roots.bookmark_bar.children.length; i++) {
  console.log(`${i} is ${bookmarks.roots.bookmark_bar.children[i].name}`);
}

app.get("/", function(req, res) {
  res.json(bookmarks.roots.bookmark_bar.children[16]);
  console.log("geleyir");
});

app.listen(3000, () => console.log("listening on 3000"));
