const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const tareas = require('./routes/api/tareas')

const app = express()

//bodyParser Middleware

app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err))

    //Use routes

app.use('/api/tareas', tareas)

//Serve static assets if in production

if(process.send.NODE_END === 'production') {
    //Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
