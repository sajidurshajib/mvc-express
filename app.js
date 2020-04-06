const express = require('express')
const path = require('path')
//Init express
const app = express()

//Load view engine
app.set('views',path.join(__dirname,'app/views'))
app.set('view engine','pug')


let route = require('./routes/route')
app.use('/',route)

//Server port
const PORT = process.env.PORT || 3000
//Run server
app.listen(PORT,()=>{
    console.log(`App run at port ${PORT}`)
})