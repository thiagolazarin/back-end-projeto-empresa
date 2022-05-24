const express = require('express');
const router = express.Router();
const yup = require('yup')

const { verificaLoginUsuario } = require("../database/loginUsuario");

router.post('/', async(req, res) => {
    const { email_usuario, senha_usuario } = req.body;

    //validar todos os campos
    console.log(email_usuario)
    console.log(senha_usuario)
    const schema = yup.object().shape({
        email_usuario: yup.string().email().required(),
        senha_usuario: yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
            mensagem: "Erro: Você preencheu algum campo errado"
        })
    } else {
        verificaLoginUsuario(email_usuario, senha_usuario).then(result => {
            res.status(200).send(result);
        }).catch((e) => {
            res.status(400).send(e);
        });
    }

});

module.exports = router;