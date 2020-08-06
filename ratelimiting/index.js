const express = require('express')
const app = express()

app.get('/nolimit', (req, res, next) => {
  res.send('Hello World with no limits!!')
})

app.get('/bucket', (req, res, next) => {
  res.send('Hello World with rate limit bucket!!')
})

app.get('/1persec', (req, res, next) => {
  res.send('Hello World with one per second')
})

app.get('/10permin', (req, res, next) => {
  res.send('Hello World with ten per min')
})

const API_PORT = process.env.PORT || 5000;
app.listen(API_PORT);
console.log('Server listening on:', API_PORT);
