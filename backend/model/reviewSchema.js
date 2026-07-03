const sequelize = require("../utils/dbConfig");
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Review = sequelize.define("reviews", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  pros: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cons: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  ratingStar: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
});

module.exports = Review;
