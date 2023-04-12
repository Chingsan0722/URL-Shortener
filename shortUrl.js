let codes = []
function randomCode() {
  let code = ''
  let possible = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0; i < 5; i++) {
    code += possible.charAt(Math.floor(Math.random() * 62))
  }
  if (codes.indexOf(code) > 0) {
    return randomCode() 
  } else {
    codes.push(code)
    return code
  }
}
module.exports = randomCode()