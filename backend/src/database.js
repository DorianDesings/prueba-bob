const mongoose = require('mongoose')

const URI = 'mongodb://localhost/mern-users'

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.err(err))

module.exports = mongoose