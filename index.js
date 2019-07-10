var express = require('express')
const bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const users = require('./routes/users')

app.use('/users', users)

app.listen(9527, function(req, res) {
  console.log('server is start')
})