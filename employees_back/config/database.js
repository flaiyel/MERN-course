const mongoose = require('mongoose')
const host = 'localhost'
const port = '27017'
const db = 'hr'
const mongoStringConnection =  `mongodb://${host}:${port}/${db}`

exports.mongoConnect = () => {
    mongoose.connect(mongoStringConnection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('DB is connected'))
    .catch(err => console.log(err))
}