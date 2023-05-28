const express = require('express');
const userController = require('../controllers/userController');
const loginRouter = express.Router();

loginRouter.get('/signin', userController.checkUser,(req, res) =>{
    res.json("signed")
})


loginRouter.post('/',userController.addUser,(req,res) => {

    res.json( res.locals.newUser)
});

module.exports  = loginRouter;

