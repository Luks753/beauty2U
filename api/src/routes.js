const UsersController = require('./controllers/UsersController.js');
const express = require('express');
const Auth = require('./middlewares/Auth');


const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.json({ message: 'Opa' })
})

router.get('/login', UsersController.login);

router.get('/users/:id?', Auth.verifyJWT, UsersController.index);
router.post('/users', UsersController.signup);

module.exports = router;