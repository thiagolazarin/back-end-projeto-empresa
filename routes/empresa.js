const express = require('express');
const router = express.Router();
const yup = require('yup')

const { cadastrarEmpresa } = require("../database/empresa");

router.post('/', async(req, res) => {

    const { nome_empresa, email_empresa, senha_empresa, cnpj_empresa } = req.body;

    //validar todos os campos
    const schema = yup.object().shape({
        nome_empresa: yup.string().required(),
        email_empresa: yup.string().email().required(),
        senha_empresa: yup.string().required(),
        cnpj_empresa: yup.string().min(14).required(),
        //logo_empresa: yup.string().required()
    })

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
            mensagem: "Erro: Você preencheu algum campo errado"

        })
    } else {
        cadastrarEmpresa(nome_empresa, email_empresa, senha_empresa, cnpj_empresa, "logo_empresa").then(result => {
            res.status(200).send(result);
        }).catch((e) => {
            res.status(400).send(e);
        });
    }

});

module.exports = router;