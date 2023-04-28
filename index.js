const express = require('express')
require("dotenv").config();
const morgan = require('morgan')
const userRouter = require("./src/APIs/routers/user.router");
const blogsRouter = require("./src/APIs/routers/blogs.router");
const cors = require("cors");
const Mongoose = require('mongoose');

// To get database details from config file
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];


console.log("env", env)

let app = express()

app.use(express.json())
app.use(morgan("dev", {
  skip: function (req, res) {
    return res.status <= 400
  }
}))
app.use(cors());


app.use("/v1/api", userRouter);
app.use("/v1/api", blogsRouter);

// To Connect database we use config file which contain different configration 
Mongoose.connect(config.database.url + process.env.DATABASE, config.database.options)
  .then(() => {
    console.log(`Connected with Database ${process.env.DATABASE}✅`)
  }).catch((err) => {
    console.log(`⛔connection error ${err}`)
  })

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`🚀 Server Listed on ${port} 🚀`)
})
