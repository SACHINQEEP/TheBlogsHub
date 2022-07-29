const express = require('express')
require("dotenv").config();
const morgan = require('morgan')
const db = require('./models')
const CONFIG = require('./config/config');
const userRouter = require("./APIs/routers/userRouter")
const cors = require("cors");

let app = express()

app.use(express.json())
app.use(morgan("dev", {
  skip: function(req, res){
    return res.status <= 400
  }
}))
app.use(cors());


app.use("/v1/api", userRouter);


db.sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to SQL database:${CONFIG.database}✅`)
    db.sequelize.sync({
      logging: false,
      force: false
    })
  })
  .catch(err => {
    console.error(
      `Unable to connect to SQL database:${CONFIG.database}❎`,
      err.message
    )
  })

let port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server Listed on ${port}`)
})
