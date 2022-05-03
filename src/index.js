// express is an fast and server-side web framework for node.js
const express = require('express')
const mongoose = require('mongoose')//ODM library for mongoDB
const bodyParser = require('body-parser');

//imported route
const route = require('./route/route')

const app = express()
const port = 3000

//body parser is a middleware, used to process data sent through an HTTP request body.
app.use(bodyParser.json());//transforms the text-based JSON input into JS-accessible variables
app.use(bodyParser.urlencoded({ extended: true }));//extended: true precises that the req.body object will contain values of any type instead of just strings.

//a framework that helps to establish a connection b/w node and mongoDB
mongoose.connect(
  "mongodb+srv://DeepakGunpal:hdg5NWwcvf2wUDTN@deepakcluster0.hynna.mongodb.net/ProjectWork?retryWrites=true&w=majority"
  ,
  { useNewurlparser: true })
  .then(() => console.log("mongoDB Connected"))//return fullfiled promise
  .catch(err => console.log(err))//return rejected promise

app.use("/", route)

//port is two-way communication link between two programs running on the network
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})