let express = require('express')
let api = express()
let date = require('date-fns/addDays')
api.get('/', (request, response) => {
  let p = date(new Date(), 100)
  response.send(`${p.getDate()}/${p.getMonth() + 1}/${p.getFullYear()}`)
})

api.listen(3000);
module.exports = api
