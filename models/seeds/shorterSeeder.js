const Shorter = require('../shorter') // 載入 todo model
const db = require('../../config/mongoose')

//檢查重複
const codes = []
// FUNCTIONS /////////////////////////////////////
// 產生彩票
function randomCode() {
  let code = ''
  let possible = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0; i < 5; i++) {
    code += possible.charAt(Math.floor(Math.random() * 62))
  }
  if (codes.indexOf(code) > 0) {
    return randomCode()  //遞迴
  } else {
    Shorter.create({ name: `${code}` })
    codes.push(code)
    return
  }
}

db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    randomCode()
  }
  console.log('done')
})
