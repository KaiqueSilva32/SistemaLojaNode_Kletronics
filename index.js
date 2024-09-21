const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

// ROTA PRINCIPAL (INDEX.EJS)
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA CLIENTES (CLIENTES.EJS)
app.get("/clientes", (req, res) => {
  const clientes = [
    {
      nome: "Roberto da Silva",
      cpf: 128563907347,
      endereco: "Rua das Oliveiras, 150 Jd.São Paulo",
    },
    {
      nome: "Laís Ribeiro",
      cpf: 11098563785,
      endereco: "Rua Ribeirópolis, 467 Jd.Blumenau",
    },
    {
      nome: "Thiago Peron",
      cpf: 38956735146,
      endereco: "Rua 10 de Outubro, 329 Av.Paulistana"
    },
    {
      nome: "Roberta Sallez",
      cpf: 24785609362,
      endereco: "Rua 9 de Março, 240 Jd. Maria das Dores"
    }
  ]
  res.render("clientes", {
    clientes: clientes,
  });
});

// ROTA PRODUTOS (PRODUTOS.EJS)
app.get("/produtos", (req, res) => {
  const produtos = [
    {
      produto: "PC Gamer AMD Ryzen",
      preco: 5300,
      categoria: "Computadores"
    },
    {
      produto: "Notebook Gamer Asus",
      preco: 7500,
      categoria: "Computador Portátil"
    },
    {
      produto: "Celular Rog Phone",
      preco: 2300,
      categoria: "Smartphones"
    },
    {
      produto: "PC Intel 9700x",
      preco: 6700,
      categoria: "Computadores"
    },
  ]
  res.render("produtos", {
    produtos: produtos 
  });
});

// ROTA PEDIDOS (PEDIDOS.EJS)
app.get("/pedidos", (req, res) => {
  const pedidos = [
    {
      numeroDoPedido: 1,
      valor: 5300,
    },
    {
      numeroDoPedido: 2,
      valor: 7500,
    },
    {
      numeroDoPedido: 3,
      valor: 6700,
    },
    {
      numeroDoPedido: 4,
      valor:2300,
    },
    {
      numeroDoPedido: 5,
      valor: 5300,
    },
    {
      numeroDoPedido: 6,
      valor: 2300
    }
  ];
  res.render("pedidos", {
    pedidos: pedidos,
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
