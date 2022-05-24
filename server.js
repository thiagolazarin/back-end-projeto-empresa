const express = require("express")
const app = express();
const cors = require('cors');

const rotaEmpresa = require('./routes/empresa');
const rotaUsuario = require('./routes/usuario');
const rotaLoginEmpresa = require('./routes/loginEmpresa');
const rotaLoginUsuario = require('./routes/loginUsuario');
const rotaTrocarSenhaEmpresa = require('./routes/alterarEmpresaSenha');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));

app.use("/empresa", rotaEmpresa)
app.use("/usuario", rotaUsuario)
app.use("/loginEmpresa", rotaLoginEmpresa)
app.use("/loginUsuario", rotaLoginUsuario);
app.use("/alterarEmpresaSenha", rotaTrocarSenhaEmpresa);


const PORT = process.env.PORT || 8081;
app.listen(PORT, function() {
    console.log("Server has started!")
});