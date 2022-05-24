const Connection = require('../infra/mysqlConnection');

async function trocarSenhaEmpresa(email_empresa, senha_empresa, senha_empresa_nova) {

    const sql = 'SELECT * FROM EMPRESA WHERE EMAIL_EMPRESA = ?'

    const result = await Connection.promise().query(sql, email_empresa);

    if (result[0].length <= 0) {
        console.log("Não tem empresa cadastrada com esse email")
        return
    } else if (result[0][0].SENHA_EMPRESA == senha_empresa) {
        const sqlResultado = 'UPDATE EMPRESA SET SENHA_EMPRESA = ? WHERE EMAIL_EMPRESA = ?';
        values = [senha_empresa_nova, email_empresa]

        Connection.query(sqlResultado, values, function(err, result) {
            if (!err) {
                console.log("Alterou a senha com sucesso!");

            } else console.log("Erro ao alterar senha!");
        })
    } else {
        console.log("Senha atual está incorreta")
        return
    }
}

module.exports = {
    trocarSenhaEmpresa
}