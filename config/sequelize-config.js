// Importando o Sequelize
import Sequelize from "sequelize"
import { AbstractDialect } from "sequelize/lib/dialects/abstract/index"

// Criando os dados de conexão com o banco de dados
const connection = new Sequelize ({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "Kletronics",
   timezone: "-03:00",
});
export default connection;