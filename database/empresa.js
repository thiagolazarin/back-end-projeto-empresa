const Connection = require('../infra/mysqlConnection');

async function cadastrarEmpresa(nome_empresa, email_empresa, senha_empresa, cnpj_empresa, logo_empresa) {
    const sql = 'INSERT INTO EMPRESA(nome_empresa,email_empresa,senha_empresa,cnpj_empresa,logo_empresa) VALUES (?,?,?,?,?);';
    const values = [nome_empresa, email_empresa, senha_empresa, cnpj_empresa, logo_empresa];

    Connection.query(sql, values, function(err, result) {
        if (!err) {
            console.log("Cadastrou corretamente a empresa!");

        } else console.log("Erro ao cadastrar empresa" + err);

    })
}

module.exports = {
    cadastrarEmpresa
}