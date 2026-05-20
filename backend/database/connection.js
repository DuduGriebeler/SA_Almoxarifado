const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "almoxarifado"
});

connection.connect((error) => {
    if (error) {
        console.log("Erro ao conectar: ", error);
        return;
    }

    console.log("Banco de Dados conectado com sucesso !");
});

module.exports = connection;