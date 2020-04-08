const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session')
//Init express
const app = express()

//Body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//Load view engine
app.set('views',path.join(__dirname,'app/views'))
app.set('view engine','pug')

//Static directory
app.use(express.static(path.join(__dirname,'public')))



//Session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))

//Flash middleware
app.use(require('connect-flash')())
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res)
  next()
})



let route = require('./routes/route')
app.use('',route)

//Server port
const PORT = process.env.PORT || 3000
//Run server
app.listen(PORT,()=>{
    console.log(`Express app run at port ${PORT}`)
})