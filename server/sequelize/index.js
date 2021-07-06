const sequelize = require('./connectors/postgre.js')
// We export the sequelize connection instance to be used around our app.
module.exports = sequelize