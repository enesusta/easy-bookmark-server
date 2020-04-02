const fs = require("fs");
const rawdata = fs.readFileSync("/data/json/Bookmarks");
module.exports = rawdata;
