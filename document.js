module.exports = function (sequelize, DataTypes) {
  const document = sequelize.define('blogDocument', {
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    title: {type: DataTypes.STRING, allowNull: false},
    titleShort: {type: DataTypes.STRING, allowNull: false},
    visual: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATEONLY, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    file: {type: DataTypes.STRING(1024), allowNull: false},
    sample: {type: DataTypes.STRING(1024), allowNull: false},
    page: {type: DataTypes.INTEGER, allowNull: false},
    isPublished: {type: DataTypes.BOOLEAN, allowNull: false},
  }, {freezeTableName: true})

  return document
}
