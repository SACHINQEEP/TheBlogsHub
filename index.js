const express = require('express')
require("dotenv").config();
const morgan = require('morgan')
const db = require('./models')
const CONFIG = require('./config/config');
const userRouter = require("./APIs/routers/userRouter")

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: "postgres://fbpzrigslyjxdp:2f7e7d0cbc355ed4ef73f269261cb665967563f5c72c14b1d7c79d8859a9b23f@ec2-34-247-72-29.eu-west-1.compute.amazonaws.com:5432/d3m3r5oqg5uop2",
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
