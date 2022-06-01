module.exports = function (sequelize, DataTypes) {
  const articleArticle = sequelize.define('blogArticleArticle', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
  }, {freezeTableName: true})

  articleArticle.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    articleArticle.belongsTo(model.article, options('articleFrom'))
    articleArticle.belongsTo(model.article, options('articleTo'))
  }

  return articleArticle
}
