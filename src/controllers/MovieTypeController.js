const MovieType = require('../models/MovieType')

module.exports = {
    async index(req, res) {
        try {
            const movie_types = await MovieType.findAll()
            return res.send(movie_types);
        } catch (err) {
            res.status(400)
            return res.send(err);
        }
    },
    async store(req, res) {
        try {
            const created = await MovieType.create(req.body)
            return res.send(created)
        } catch (err) {
            res.status(400)
            return res.send(err)
        }
    },
    // async show(req, res) {
    //     try {
    //         const data = await Aluno.findByPk(req.params.id);
    //         return res.send(data);
    //     } catch (err) {
    //         res.status(400);
    //         return res.send(err);
    //     }
    // },
    // async update(req, res) {
    //     try {

    //         const data = await Aluno.update({...req.body }, { where: { id: req.params.id } });
    //         return res.send(data);
    //     } catch (err) {
    //         res.status(400);
    //         return res.send(err);
    //     }
    // },
    // async destroy(req, res) {
    //     try {
    //         const data = await Aluno.findByPk(req.params.id);
    //         data.destroy();
    //         return res.send(data);
    //     } catch (err) {
    //         return res.send(err);
    //     }
    // }
}