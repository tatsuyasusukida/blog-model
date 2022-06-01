module.exports = function (sequelize, DataTypes) {
  const categorySerial = sequelize.define('blogCategorySerial', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
  }, {freezeTableName: true})

  categorySerial.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    categorySerial.belongsTo(model.category, options('category'))
    categorySerial.belongsTo(model.serial, options('serial'))
  }

  return categorySerial
}
