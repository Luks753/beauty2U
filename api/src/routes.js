const UsersController = require('./controllers/UsersController.js');
const express = require('express');


const router = express.Router();
router.use(express.json());

router.get('/', (req,res)=>{
    res.json({message: 'Opa'})
})

router.get('/users/:id?', UsersController.index);
router.post('/users', UsersController.signup);

module.exports = router;