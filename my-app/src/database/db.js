const { Sequelize } = require("sequelize");
const { dbPass } = require("../../secrets");


//PUT PASSWORD BACK IN HERE WHEN YOU START WORKING AGAIN
const sequelize = new Sequelize('postgres', 'postgres', dbPass, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq: sequelize, testDbConnection };