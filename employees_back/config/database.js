const mongoose = require('mongoose')

const host = 'localhost'
const port = '27017'
const db = 'hr'

// const mongoStringConnection =  `mongodb://${host}:${port}/${db}`
// mongoose.connect(mongoStringConnection, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(d => console.log('DB is connected'))
//     .catch(err => console.log(err))
// module.exports = mongoose

exports.mongoConnect = () => {
    const mongoStringConnection =  `mongodb://${host}:${port}/${db}`
    mongoose.connect(mongoStringConnection)
    mongoose.Promise = global.Promise
    const dbConnection = mongoose.connection
    dbConnection.on('Error', console.error.bind(console, 'mongodb connection error'))
}