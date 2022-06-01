module.exports = function (sequelize, DataTypes) {
  const emailTemplate = sequelize.define('blogEmailTemplate', {
    sort: {type: DataTypes.INTEGER, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false, unique: true},
    title: {type: DataTypes.STRING, allowNull: false},
    fromEmail: {type: DataTypes.STRING, allowNull: false},
    fromName: {type: DataTypes.STRING, allowNull: false},
    toEmail: {type: DataTypes.STRING, allowNull: false},
    toName: {type: DataTypes.STRING, allowNull: false},
    subject: {type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.TEXT('medium'), allowNull: false},
  }, {freezeTableName: true})

  return emailTemplate
}
