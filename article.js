module.exports = function (sequelize, DataTypes) {
  const article = sequelize.define('blogArticle', {
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    title: {type: DataTypes.STRING, allowNull: false},
    titleShort: {type: DataTypes.STRING, allowNull: false},
    visual: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATEONLY, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    body: {type: DataTypes.TEXT('medium'), allowNull: false},
    minute: {type: DataTypes.INTEGER, allowNull: false},
    isPublished: {type: DataTypes.BOOLEAN, allowNull: false},
  }, {freezeTableName: true})

  return article
}
