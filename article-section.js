module.exports = function (sequelize, DataTypes) {
  const articleSection = sequelize.define('blogArticleSection', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    url: {type: DataTypes.STRING, allowNull: false},
  }, {freezeTableName: true})

  articleSection.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    articleSection.belongsTo(model.article, options('article'))
  }

  return articleSection
}
