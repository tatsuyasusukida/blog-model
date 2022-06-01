module.exports = function (sequelize, DataTypes) {
  const author = sequelize.define('blogAuthor', {
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    name: {type: DataTypes.STRING, allowNull: false},
    kana: {type: DataTypes.STRING, allowNull: false},
    roman: {type: DataTypes.STRING, allowNull: false},
    url: {type: DataTypes.STRING, allowNull: false},
    visual: {type: DataTypes.STRING, allowNull: false},
    profile: {type: DataTypes.TEXT, allowNull: false},
  }, {freezeTableName: true})

  return author
}
