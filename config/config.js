const dotenv = require('dotenv').config()

const CONFIG = {}

CONFIG.app = process.env.APP || 'dev'

CONFIG.port = process.env.PORT || 7000

CONFIG.database = process.env.DATABASE || 'blogs'

CONFIG.Secrat_key = process.env.SECRAT_KEY

CONFIG.expire_in = process.env.EXPIRE_IN || '1d'

module.exports = CONFIG
