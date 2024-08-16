'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Theme, { foreignKey: 'themeId' })
      this.hasMany(models.Answer, { foreignKey: 'questionId' })
    }
  }
  Question.init({
    text: DataTypes.STRING,
    point: DataTypes.INTEGER,
    themeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};