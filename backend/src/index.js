const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

const { mongoose } = require('./database')

const app = express()

//Settings
app.set('port', process.env.PORT || 4000)

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//Routes
app.use(require('./routes/user.routes'))

//Errors
app.use((err, req, res, next) => {
    res.send({ error: err.message })
})

//Public
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})