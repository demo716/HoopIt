const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  name: {
    type: Sequelize.STRING,
  }
})

module.exports = Transaction
