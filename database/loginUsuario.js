const Connection = require('../infra/mysqlConnection');

async function verificaLoginUsuario(email_usuario, senha_usuario) {
    const sql = 'SELECT * FROM USUARIO WHERE EMAIL_USUARIO = ?;';

    const result = await Connection.promise().query(sql, email_usuario);

    if (result[0].length < 0) {
        console.log("Usuário não cadastrado")
    } else {

        if (result[0][0].SENHA_USUARIO === senha_usuario) {
            console.log("here")
            console.log('Usuário logado!')
            result[0][0].SENHA_USUARIO = null;
            return result[0][0];

        } else {
            console.log("Senha incorreta")
            console.log("here")
        }
    }
}

module.exports = {
    verificaLoginUsuario
}