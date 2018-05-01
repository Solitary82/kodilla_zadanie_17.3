var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var stringifyFile = ''
var app = express()

app.use(bodyParser.json())

app.get('/getNote', function (req, res) {
  fs.readFile('./test.json', 'utf-8', function (err, data) {
    if (err) throw err
    stringifyFile = data
    res.send(data)
  })
})

app.post('/updateNote/:note', function (req, res) {
  console.log('Wczytuję text.json')
  res.send(stringifyFile += req.params.note)
  fs.writeFile('./test.json', stringifyFile, function (err) {
    if (err) throw err
    console.log('File updated')
  })
})

app.listen(3000)
