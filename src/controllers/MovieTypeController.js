const MovieType = require('../models/Movie')

module.exports = {
    async index(req, res) {
        try {
            const movie_types = await MovieType.findAll()
            return res.send(movie_types);
        } catch (err) {
            res.status(400)
            return res.send(err);
        }
    }
}