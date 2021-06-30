const Movie = require('../models/Movie');

module.exports = {
    async index(req, res) {
        try {
            const movies = await Movie.findAll()
            return res.send(movies);
        } catch (err) {
            res.status(400)
            return res.send(err)
        }
    },
    // async store(req, res) {
    //     try {
    //         const created = await Acesso.create(req.body)
    //         return res.send(req.body)
    //     } catch (err) {
    //         res.status(400)
    //         return res.send(err)
    //     }
    // },
    async show(req, res) {
        try {
            const data = await Movie.findByPk(req.params.id);
            if(!data){
                return res.status(404).send({error:"Movie not found"});
            }
            return res.send(data);
        } catch (err) {
            res.status(400);
            return res.send(err);
        }
    },
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