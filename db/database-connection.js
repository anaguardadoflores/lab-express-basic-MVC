const mongoose = require('mongoose')

const databaseName = 'themepark'
const connectionString = `mongodb://127.0.0.1/${databaseName}`

mongoose
    .set('strictQuery', true)
    .connect(connectionString)
    .then(connectionInfo => console.log(`Conected to mongo! DB Name: "${connectionInfo.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))