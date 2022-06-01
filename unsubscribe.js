module.exports = function (sequelize, DataTypes) {
  const unsubscribe = sequelize.define('blogUnsubscribe', {
    date: {type: DataTypes.DATE, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
  }, {freezeTableName: true})

  return unsubscribe
}
