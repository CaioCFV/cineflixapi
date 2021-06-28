const Acesso = require('../models/Acesso');

module.exports = {
    async index(req, res) {
        try {
            const access = await Acesso.findAll()
            return res.send(access);
        } catch (err) {
            res.status(400)
            return res.send(err)
        }
    },
    async store(req, res) {
        try {
            const created = await Acesso.create(req.body)
            return res.send(req.body)
        } catch (err) {
            res.status(400)
            return res.send(err)
        }
    },
    async show(req, res) {
        try {
            const data = await Acesso.findByPk(req.params.id);
            return res.send(data);
        } catch (err) {
            res.status(400);
            return res.send(err);
        }
    },
    async update(req, res) {
        try {

            const data = await Aluno.update({...req.body }, { where: { id: req.params.id } });
            return res.send(data);
        } catch (err) {
            res.status(400);
            return res.send(err);
        }
    },
    async destroy(req, res) {
        try {
            const data = await Aluno.findByPk(req.params.id);
            data.destroy();
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    }
}

// const m = await Acesso.findOne()
// const b = await m.addModulo(1,{ through: { 
//     criar: false,
//     ler: false,
//     atualizar: false,
//     excluir:false
// }});
// console.log(m)