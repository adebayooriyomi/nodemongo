const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 5000;

const runServer = () => app.listen(PORT, () => {
    return console.log('Server is running..')
})

//routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send("Hello from Node API")
})

mongoose.connect()// Your Mongo DB Atlas connection string
    .then(()=> {
        console.log('Connected to Database...')
        runServer()
    }).catch(()=> {
        console.log('Connection Failed...')
    })

    