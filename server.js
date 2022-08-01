const express = require('express')
const app = express()
const mongoose = require('mongoose')

//load enveriment variables from .env
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)

//hook some events to run when database connected to, to know working correctly
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to Database'))
//only run once , when connected to database

// let server accept json as a body
app.use(express.json())

// set up routes
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)
// anyurl with localhost:3000/subscribers will be there


//https://www.youtube.com/watch?v=fgTGADljAeg

app.listen(3000, () => console.log('server started'))