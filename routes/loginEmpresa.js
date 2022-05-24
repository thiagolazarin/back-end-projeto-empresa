const express = require('express');
const router = express.Router();
const yup = require('yup')

const { verificaLoginEmpresa } = require("../database/loginEmpresa");

router.post('/', async(req, res) => {
    const { email_empresa, senha_empresa } = req.body;

    const schema = yup.object().shape({
        email_empresa: yup.string().required().email(),
        senha_empresa: yup.string().required()
    })

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
            mensagem: "Erro: você preencheu algum campo errado"
        })
    } else {
        verificaLoginEmpresa(email_empresa, senha_empresa).then(result => {
            res.status(200).send(result);
        }).catch((e) => {
            res.status(400).send(e);
        });
    }

});

module.exports = router;