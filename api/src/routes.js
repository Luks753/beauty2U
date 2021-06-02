const UsersController = require('./controllers/UsersController.js');
const ServicesController = require('./controllers/ServicesController.js');
const express = require('express');
const Auth = require('./middlewares/Auth');
const RatingsController = require('./controllers/RatingsController.js');
const CategoriesController = require('./controllers/CategoriesController.js');
const SchedulesController = require('./controllers/SchedulesController.js');


const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.json({ message: 'Opa' })
})

router.post('/login', UsersController.login);
router.post('/register', UsersController.signup);

router.get('/users/', Auth.verifyJWT, UsersController.index);
router.get('/users/:id?', Auth.verifyJWT, UsersController.show);

router.get('/services/', ServicesController.index);
router.get('/services/:id?', ServicesController.show);
router.post('/services', ServicesController.create)

router.get('/ratings/', RatingsController.index);
router.get('/ratings/:id?', RatingsController.show);
router.post('/ratings', Auth.verifyJWT, RatingsController.create);

router.get('/categories/', CategoriesController.index);
router.get('/categories/:id?', CategoriesController.show);

router.get('/schedules/', SchedulesController.index);
router.get('/schedules/:professionalId?', SchedulesController.show);
router.post('/schedules', SchedulesController.create);


module.exports = router;