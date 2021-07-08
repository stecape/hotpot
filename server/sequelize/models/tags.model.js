const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('tags', {
    tagName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tagDesc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tagType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tagValue: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  })
}