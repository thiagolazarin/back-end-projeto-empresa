const Connection = require('../infra/mysqlConnection');

async function verificaLoginEmpresa(email_empresa, senha_empresa) {
    const sql = 'SELECT * FROM EMPRESA WHERE EMAIL_EMPRESA = ?;';

    const result = await Connection.promise().query(sql, email_empresa);

    if (result[0].length < 0) {
        console.log("Empresa não cadastrada")
    } else {
        if (result[0][0].SENHA_EMPRESA === senha_empresa) {
            console.log('Empresa logada!')
            result[0][0].SENHA_EMPRESA = null;
            return result[0][0];
        } else {
            console.log("Senha incorreta")
        }
    }
}

module.exports = {
    verificaLoginEmpresa
}