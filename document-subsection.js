module.exports = function (sequelize, DataTypes) {
  const documentSubsection = sequelize.define('blogDocumentSubsection', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
  }, {freezeTableName: true})

  documentSubsection.associate = function (model) {
    const options = (as) => ({
      as,
      foreignKey: {allowNull: false},
      constraints: false,
    })

    documentSubsection.belongsTo(model.documentSection, options('documentSection'))
  }

  return documentSubsection
}
