const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const configDB = require('./config/database')
const passport = require('passport')

//Init express
const app = express()



//Mongoose setup
mongoose.connect(configDB.database,{ 
  useNewUrlParser: true,
  useUnifiedTopology: true
 })
 
let db = mongoose.connection
//Check connection
db.once('open',()=>{
  console.log('Connected with mongodb')
})
//Check error
db.on('error',(err)=>{
  console.log(err)
})




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






// passport config
require('./config/passport')(passport)
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//When you need authenticate...

// app.get('*',req,res,next){
//   res.locals.user = req.user || null
//   next()
// }







let route = require('./routes/route')
app.use('',route)

//Server port
const PORT = process.env.PORT || 3000
//Run server
app.listen(PORT,()=>{
    console.log(`Express app run at port ${PORT}`)
})