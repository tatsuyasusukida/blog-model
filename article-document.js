module.exports = function (sequelize, DataTypes) {
  const articleDocument = sequelize.define('blogArticleDocument', {
  }, {
    indexes: [
      {
        unique: true,
        fields: ['articleId', 'documentId'],
      }
    ],
    freezeTableName: true,
  })

  articleDocument.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    articleDocument.belongsTo(model.article, options('article'))
    articleDocument.belongsTo(model.document, options('document'))
  }

  return articleDocument
}
