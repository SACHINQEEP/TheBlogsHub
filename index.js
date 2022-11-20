const express = require('express')
require("dotenv").config();
const morgan = require('morgan')
const userRouter = require("./src/APIs/routers/user.router");
const blogsRouter = require("./src/APIs/routers/blogs.router");
const cors = require("cors");
const db = require("./models/index");

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

let connect = db.connection;
connect.on("error", console.error.bind(console, "could not connect with database"));

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`🚀 Server Listed on ${port} 🚀`)
})
