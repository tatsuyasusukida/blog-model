module.exports = function (sequelize, DataTypes) {
  const email = sequelize.define('blogEmail', {
    date: {type: DataTypes.DATE, allowNull: false},
    fromEmail: {type: DataTypes.STRING, allowNull: false},
    fromName: {type: DataTypes.STRING, allowNull: false},
    toEmail: {type: DataTypes.STRING, allowNull: false},
    toName: {type: DataTypes.STRING, allowNull: false},
    subject: {type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.TEXT('medium'), allowNull: false},
    isSent: {type: DataTypes.BOOLEAN, allowNull: false},
    errorCount: {type: DataTypes.INTEGER, allowNull: false},
    errorMessage: {type: DataTypes.STRING, allowNull: false},
    errorStack: {type: DataTypes.TEXT, allowNull: false},
  }, {freezeTableName: true})

  return email
}
