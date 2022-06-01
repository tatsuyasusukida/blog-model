module.exports = function (sequelize, DataTypes) {
  const publicFile = sequelize.define('blogPublicFile', {
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    location: {type: DataTypes.STRING(1024), allowNull: false},
  }, {freezeTableName: true})

  return publicFile
}
