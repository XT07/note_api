const app = require("./src/app.js");
const connection = require('./src/configs/database');
const { sequelize } = require('./src/models');

connection
	.authenticate()
	.then(() => {
		console.log("Banco de dados conectado");
	})
	.catch(err => {
		console.log("Não foi possivel se conectar com o banco de dados");
	})

sequelize.sync({ alter: true }).then(() => {
  console.log('Banco de dados sincronizado');                
});

app.listen("3030", () => {
	console.log("Server rodando");
})
