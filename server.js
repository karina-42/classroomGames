const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const lineRowRoutes = require('./routes/lineRow')
const methodOverride = require('method-override')
require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(methodOverride("_method"))

app.use('/', homeRoutes)
app.use('/lineRow', lineRowRoutes)



app.listen(process.env.PORT, () => {
  console.log(`catch the server at port ${process.env.PORT}`);
})