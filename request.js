module.exports = function (sequelize, DataTypes) {
  const request = sequelize.define('blogRequest', {
    date: {type: DataTypes.DATE, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    subscribe: {type: DataTypes.STRING, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
  }, {freezeTableName: true})

  return request
}
