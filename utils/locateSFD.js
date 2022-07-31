const fs = require("fs");

module.exports = async function () {
  return JSON.parse(await fs.readFile("./sfpack.json").toString());
}
