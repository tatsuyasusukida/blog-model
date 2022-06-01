module.exports = function (sequelize, DataTypes) {
  const authorArticle = sequelize.define('blogAuthorArticle', {
  }, {
    indexes: [
      {
        unique: true,
        fields: ['authorId', 'articleId'],
      }
    ],
    freezeTableName: true,
  })

  authorArticle.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    authorArticle.belongsTo(model.author, options('author'))
    authorArticle.belongsTo(model.article, options('article'))
  }

  return authorArticle
}
