module.exports = function (sequelize, DataTypes) {
  const serialArticle = sequelize.define('blogSerialArticle', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
  }, {freezeTableName: true})

  serialArticle.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    serialArticle.belongsTo(model.serial, options('serial'))
    serialArticle.belongsTo(model.article, options('article'))
  }

  return serialArticle
}
