const { Router } = require('express');
const routes = Router();

//ROTAS PARA ACESSO
const TypeController = require('./controllers/MovieTypeController');
routes.post('/movie/type', TypeController.store);
routes.get('/movie/type', TypeController.index);
routes.get('/movie/type/:id', TypeController.show);
routes.put('/movie/type/:id', TypeController.update);
routes.delete('/movie/type/:id', TypeController.destroy);

//ROTAS PARA ANOLETIVO
const MovieController = require('./controllers/MovieController');
// routes.post('/movie', MovieController.store);
routes.get('/movie', MovieController.index);
// routes.get('/movie/type', MovieController.show);
// routes.put('/movie/type', MovieController.update);
// routes.delete('/movie/type', MovieController.destroy);

module.exports = routes;