module.exports = function (sequelize, DataTypes) {
  const topic = sequelize.define('blogTopic', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    title: {type: DataTypes.STRING, allowNull: false},
  }, {freezeTableName: true})

  return topic
}
