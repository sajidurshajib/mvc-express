const express = require('express')
const router = express.Router()

//Call controller
const demo = require('../app/controllers/DemoController')

//Route
router.get('/',demo.home)
router.get('/login',demo.login)
router.post('/login',demo.validate,demo.postLogin)


module.exports = router 