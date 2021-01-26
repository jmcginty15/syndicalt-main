const mongoose = require('mongoose')

const DBconnection = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .catch(err => {
      console.log(`Couldn't connect to the DB`.red, err)
    })

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = DBconnection
