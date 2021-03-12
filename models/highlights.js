'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Highlights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Pages, { foreignKey: 'pageId', targetKey: 'id' });
    }
  }
  Highlights.init(
    {
      userId: DataTypes.INTEGER,
      pageId: DataTypes.INTEGER,
      colorHex: DataTypes.STRING,
      text: DataTypes.STRING,
      theme: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Highlights',
    }
  );
  return Highlights;
};
