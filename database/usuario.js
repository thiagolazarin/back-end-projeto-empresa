const Connection = require('../infra/mysqlConnection');

async function cadastrarUsuario(nome_usuario, senha_usuario, email_usuario, res) {
    const sql = 'INSERT INTO USUARIO(nome_usuario,senha_usuario,email_usuario) VALUES (?,?,?);';
    const values = [nome_usuario, senha_usuario, email_usuario];

    Connection.query(sql, values, function(err, result) {
        if (!err) {
            console.log("Inseriu corretamente usuario");
        } else {
            console.log("Erro ao inserir novo usuario" + err);
        }
    })
}

module.exports = {
    cadastrarUsuario
}