const express = require('express')
const router = express.Router()

const Shorter = require('../../models/shorter')
// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
  // Todo.find() //取出Todo model裡的所有資料(也可在()中寫入指定要找的資料)
  //   .lean() //把mongoose的model物件轉換成乾淨的 js資料陣列
  //   .sort({ name: 'asc' }) // 順序asc；反序desc
  //   .then(todos => res.render('index', { todos })) //將資料傳給 index樣板 , { todos } 是 { todos:todos }的縮寫
  //   .catch(error => console.error(error)) //錯誤處理
})
// 匯出路由模組
module.exports = router