const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
  'postgres', 'postgres', 'pgadmin',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)
const modelDefiners = [
	require('../models/tags.model')
	// Add more models here...
	// require('./models/item'),
]

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize)
}
// We export the sequelize connection instance to be used around our app.
module.exports = sequelize