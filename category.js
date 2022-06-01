module.exports = function (sequelize, DataTypes) {
  const category = sequelize.define('blogCategory', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    title: {type: DataTypes.STRING, allowNull: false},
  }, {freezeTableName: true})

  return category
}
