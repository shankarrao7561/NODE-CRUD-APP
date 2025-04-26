const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
const app = express()

app.use(express.json())

app.use("/api/products", productRoute)



mongoose.connect('mongodb+srv://ramuoffers:sample1234@crudcluster1.o54fleq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=crudcluster1')
  .then(() => console.log('Connected!')).catch(() => {
    console.log("error fiund")
  })
  


