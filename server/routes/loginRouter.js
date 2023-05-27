const express = require('express')
const loginRouter = express.Router();

loginRouter.get('/', (req, res) =>{
    res.json('some existing user dat')
})


