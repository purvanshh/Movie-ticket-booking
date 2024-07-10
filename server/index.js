const express = require('express')
var cors = require('cors')

require('dotenv').config();

const dbConfig = require('./config/dbConfig')

const app = express()

const userRoutes = require('./routes/userRoutes')


app.use(cors())
app.use(express.json())
app.use('/api/users' , userRoutes)



const PORT = process.env.PORT || 3000




app.listen(PORT , ()=>{
    console.log("server running")
})