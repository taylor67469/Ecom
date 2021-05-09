const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Product = require('./Product.js');

class Tag extends Model { }

Tag.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    tag_name: { type: DataTypes.STRING, references: { model: Product, key: id } },
    tag_id: { type: DataTypes.INTEGER, references: { model: Tag, key: id } },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
