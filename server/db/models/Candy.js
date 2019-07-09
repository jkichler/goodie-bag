const Sequelize = require('sequelize');
const db = require('../database');

 const Candy = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Starburst-Candies.jpg/800px-Starburst-Candies.jpg'
  }
});

module.exports = Candy;
