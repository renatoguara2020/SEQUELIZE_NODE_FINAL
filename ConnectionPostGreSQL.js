const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('react_database', 'postgres', '456ALVES', {
    host: 'localhost',
    dialect: 'postgres' 
  });

  try {
    sequelize
      .authenticate()
      .then(function () {
        console.log("Connection has been established successfully.");
      })
      .catch(function (error) {
        console.error("Unable to connect to the database:", error);
      });
  } catch (error) {}
  
  module.exports = Sequelize;