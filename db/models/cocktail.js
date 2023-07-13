'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Cocktail.init({
    link: DataTypes.STRING,
    cocktail: DataTypes.STRING,
    ingridients: DataTypes.STRING,
    recipe: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Cocktail',
  });
  return Cocktail;
};