const express = require('express')
const http = require('http')
//const bodyParser = require('body-parser')
const morgan = require('morgan')
const jsonBodyParser = express.json()
const Router = require('./router')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

//DB
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true }, { useUnifiedTopology: true })

//APP
app.use(morgan('combined'))//middleware, logging framework, logs requests
app.use(cors())
app.use(jsonBodyParser)//parses incoming request, parse into JSON
//app.use(bodyParser.json({type: '*/*'}))

app.use('/api',Router)


//SERVER
const port = process.env.PORT || 5000;
const server = http.createServer(app);// low-level request handling
server.listen(port);
console.log(`Server listening on port: ${port}`)