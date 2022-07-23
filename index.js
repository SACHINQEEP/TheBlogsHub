const express = require('express')
require("dotenv").config();
const morgan = require('morgan')
const db = require('./models')
const CONFIG = require('./config/config');
const userRouter = require("./APIs/routers/userRouter")

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: "postgres://nsdmblwlfovfcd:dff9d1078582262dd245813941f310801d9de518ef6a164900bd6b0af5b64302@ec2-44-206-214-233.compute-1.amazonaws.com:5432/d5chq839i5f6e5",
  ssl: {
    rejectUnauthorized: false
  }
});



let app = express()

let router = express.Router();

app.use(express.json())
app.use(
  morgan('dev', {
    skip: function (req, res) {
      return res.statusCode < 400
    }
  })
)

app.use("/v1/api", userRouter);

router.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})


db.sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to SQL database:${CONFIG.database}`)
    db.sequelize.sync({
      logging: false,
      force: false
    })
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
