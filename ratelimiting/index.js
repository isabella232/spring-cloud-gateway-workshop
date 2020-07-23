const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

const API_PORT = process.env.PORT || 5000;
app.listen(API_PORT);
console.log('Smoker Auth listening on:', API_PORT);
