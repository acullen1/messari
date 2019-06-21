
const responseObject = require("got")
.get("https://data.messari.io/api/v1/assets")
.then(response => {
  return JSON.parse(response.body)})

module.exports = responseObject