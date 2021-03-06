const MovieType = require('../models/MovieType');

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
    async show(req, res) {
        try {
            const data = await MovieType.findByPk(req.params.id);
            if(!data){
                return res.status(404).send({error: "Type not found"});
            }   
            return res.send(data);
        } catch (err) {
            res.status(400);
            return res.send(err);
        }
    },
    async update(req, res) {
        try {
            const data = await MovieType.update({...req.body }, { where: { id: req.params.id } });
            return res.send(data);
        } catch (err) {
            res.status(400);
            return res.send(err);
        }
    },
    async destroy(req, res) {
        try {
            const data = await MovieType.findByPk(req.params.id);
            if(!data){
                return res.status(404).send({error: "Type not found"});
            }
            data.destroy();
            return res.send(data);
        } catch (err) {
            return res.send(err);
        }
    }
}