const express = require('express')
const morgan = require('morgan')
const sequelize = require('sequelize')
const db = require('./models')
const CONFIG = require('./config/config')

let app = express()

app.use(express.json())
app.use(
  morgan('dev', {
    skip: function (req, res) {
      return res.statusCode < 400
    }
  })
)

db.sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to SQL database:${CONFIG.database}`)
  })
  .catch(err => {
    console.error(
      `Unable to connect to SQL database:${CONFIG.database}`,
      err.message
    )
  })

let port = CONFIG.port

app.listen(port, () => {
  console.log(`Server Listed on ${port}`)
})
