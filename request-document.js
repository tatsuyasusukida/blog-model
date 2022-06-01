module.exports = function (sequelize, DataTypes) {
  const requestDocument = sequelize.define('blogRequestDocument', {
  }, {freezeTableName: true})

  requestDocument.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    requestDocument.belongsTo(model.request, options('request'))
    requestDocument.belongsTo(model.document, options('document'))
  }

  return requestDocument
}
