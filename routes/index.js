const express = require('express')
const router = express.Router()


const home = require('./modules/home')
const shorter = require('./modules/shorter')

// router.use('/urlShorter', shorter)
router.use('/', home)

// 匯出路由器
module.exports = router