// Importando o Express com ES6 Modules
import express from "express";
// Iniciando o Express na variável app
const app = express();
// Importando o Sequelize (com os dados da conexão)
import connection from "./config/sequelize-config.js";
// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import UsersController from "./controllers/UsersController.js"

// Importando o gerador de sessões  do express
import session from "express-session";

// Importando o middleware Auth
import Auth from "./middleware/Auth.js";

// Importando o express flash
import flash from "express-flash";

// Configurando o express-session
app.use(
  session({
    secret: "Kletronics",
    cookie: { maxAge: 3600000 },
    saveUnitialized: false,
    resave: false,
  })
);

// Configurando as flash messages
app.use(flash());

// Permite capturar dados vindo de formulários
app.use(express.urlencoded({ extend: false }));

// Permite capturar dados vindo de formulários
app.use(express.urlencoded({ extend: false }));

// Realizando a conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

// Criando o banco de dados se ele não existir
connection
  .query(`CREATE DATABASE IF NOT EXISTS Kletronics;`)
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", UsersController);

// ROTA PRINCIPAL
app.get("/", Auth, (req, res) => {
  res.render("index", {
    messages: req.flash(),
  });
});

// INICIANDO O SERVER NA PORTA (3000)
const port = 3000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro e o servidor não pode ser iniciado ${error}.`);
  } else {
    console.log(`O servidor foi iniciado: http://localhost:${port}`);
  }
});
