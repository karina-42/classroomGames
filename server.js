const express = require('express')
const app = express()
require('dotenv').config()


// app.get(('/', req, res) => {
//   res.
// })

app.listen(process.env.PORT, () => {
  console.log(`catch the server at port ${process.env.PORT}`);
})