const express = require('express');
const router = express.Router();

const { trocarSenhaEmpresa } = require("../database/alterarEmpresaSenha")

router.post('/', (req, res) => {
    const { email_empresa, senha_empresa, senha_empresa_nova } = req.body;

    trocarSenhaEmpresa(email_empresa, senha_empresa, senha_empresa_nova).then(result => {
        res.status(200).send(result);
    }).catch((e) => {
        res.status(400).send(e);
    });

});


module.exports = router;