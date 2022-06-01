module.exports = function (sequelize, DataTypes) {
  const documentArticle = sequelize.define('blogDocumentArticle', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
  }, {freezeTableName: true})

  documentArticle.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    documentArticle.belongsTo(model.document, options('document'))
    documentArticle.belongsTo(model.article, options('article'))
  }

  return documentArticle
}
