const axios = require("axios");

async function latest(package) {
  let response = await axios.get(`https://registry.npmjs.com/${package}`);
  let json = response.data;
  
  return json["dist-tags"].latest;
}

