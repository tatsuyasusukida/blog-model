module.exports = function (sequelize, DataTypes) {
  const documentSection = sequelize.define('blogDocumentSection', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
  }, {freezeTableName: true})

  documentSection.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    documentSection.belongsTo(model.document, options('document'))
  }

  return documentSection
}
