const express = require('express');
const router = express.Router();
const yup = require('yup')

const { cadastrarUsuario } = require("../database/usuario");

router.post('/', async(req, res) => {

    const { nome_usuario, senha_usuario, email_usuario } = req.body;

    //validar todos os campos
    const schema = yup.object().shape({
        nome_usuario: yup.string().required(),
        senha_usuario: yup.string().required(),
        email_usuario: yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
            mensagem: "Erro: Você preencheu algum campo errado"
        })
    } else {
        cadastrarUsuario(nome_usuario, senha_usuario, email_usuario).then(result => {
            res.status(200).send(result);

        }).catch((e) => {
            res.status(400).send(e);
        });
    }

});

module.exports = router;