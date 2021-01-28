const express = require('express')
require('dotenv').config();
require('./config/db')
const productRoutes=require('./routes/productRoutes')

const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json());

app.use('/api/products',productRoutes)

const port = process.env.PORT || 5000
app.listen(port, (req, res) => {
 console.log('Server running')
})