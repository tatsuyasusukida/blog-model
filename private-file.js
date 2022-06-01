module.exports = function (sequelize, DataTypes) {
  const privateFile = sequelize.define('blogPrivateFile', {
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    location: {type: DataTypes.STRING(1024), allowNull: false},
  }, {freezeTableName: true})

  return privateFile
}
