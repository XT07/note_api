const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sec_API", "root", "", {
	dialect: "mysql",
	host: "localhost"
});

module.exports = sequelize;
