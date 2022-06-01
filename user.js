module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define('blogUser', {
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
  }, {freezeTableName: true})

  return user
}
