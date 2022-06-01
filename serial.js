module.exports = function (sequelize, DataTypes) {
  const serial = sequelize.define('blogSerial', {
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    title: {type: DataTypes.STRING, allowNull: false},
    titleShort: {type: DataTypes.STRING, allowNull: false},
    visual: {type: DataTypes.STRING, allowNull: false},
    isPublished: {type: DataTypes.BOOLEAN, allowNull: false},
  }, {freezeTableName: true})

  return serial
}
