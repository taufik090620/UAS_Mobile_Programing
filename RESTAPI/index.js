
const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const bodyParser = require('body-parser')
const db = require('./Config/database')
app.use(cors())

global.__basedir = __dirname;

app.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}))
app.use(bodyParser.urlencoded({
  extended:true,
  limit: '50mb'
}))
db.connectToDb

app.use(express.static('static'))
app.use(express.static(__dirname + '/Images'));
app.use(express.static('public/uploads'));
app.use('/img', require('./Router/image_router'))

app.use('/users', require('./Router/user_router'))
app.use('/parabotan', require('./Router/parabotan_router'))

app.get("/", (req, res) => {
  res.json({ message: "SELAMAT DATANG" });
});
app.listen(port, function(){
  console.log('Berjalan Di port:' + port)
})
