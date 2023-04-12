const express = require('express')
const exphbs = require('express-handlebars')
const shorter = require('./models/shorter')

require('./config/mongoose')
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const shortUrl = require('./shortUrl')
  if(!req.body.url){
   return res.redirect('/')
  }else{
    shorter.findOne({userUrl: req.body.url})
    .then(data =>
      data ? data : shorter.create({ shortUrl: `${shortUrl}`, userUrl: req.body.url }))
    .then(data =>
      res.render("index", {
        origin: req.headers.origin,
        shortUrl: data.shortUrl,
      }))
    .catch(error => console.error(error))
  }
})

app.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params
  shorter.findOne({ shortUrl })
    .then(data => {
      if(!data){
        res.render('error')
      }
      res.redirect(data.userUrl)
    })
    .catch(error => console.error(error))
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})