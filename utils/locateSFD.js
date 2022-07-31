const fs = require("fs");

module.exports = async function () {
  return JSON.parse(fs.readFileSync("./sfpack.json").toString());
}
