module.exports = function (sequelize, DataTypes) {
  const topicArticle = sequelize.define('blogTopicArticle', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
  }, {freezeTableName: true})

  topicArticle.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    topicArticle.belongsTo(model.topic, options('topic'))
    topicArticle.belongsTo(model.article, options('article'))
  }

  return topicArticle
}
