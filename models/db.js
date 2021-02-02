const Sequelize = require("sequelize");

// Conexão com o bando de dados MySQL

const sequelize = new Sequelize("postapp", "user", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
