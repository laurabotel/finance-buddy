const express = require('express');
const userController = require('../controllers/userController');
const loginRouter = express.Router();

loginRouter.get('/', userController.addUser,(req, res) =>{
    res.json('some existing user data')
})


loginRouter.post('/:user/:id',userController.addUser,(req,res) => {

    res.json( res.locals.newUser)
});

module.exports  = loginRouter;

