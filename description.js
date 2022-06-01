module.exports = function (sequelize, DataTypes) {
  const description = sequelize.define('blogDescription', {
    subject: {type: DataTypes.STRING(1024), allowNull: false},
    predicate: {type: DataTypes.STRING(1024), allowNull: false},
    object: {type: DataTypes.STRING(1024), allowNull: false},
  }, {freezeTableName: true})

  return description
}
