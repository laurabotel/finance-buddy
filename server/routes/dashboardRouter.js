const express = require('express');
const dashboardRouter = express.Router();
const userController = require('../controllers/userController.js');

// for GET requests to the dashboard, load user avatar, and user saved data that matches the URL param
dashboardRouter.get('/:username', userController.findUser, (req, res) => {
  res.json(`'some existing user data': ${res.locals.username}`);
});

// for POST requests to dashboard endpoing, save data as a projection
dashboardRouter.post('/:username/:id', (req, res) => {
  res.json(
    `projection with id: ${req.params.id}, was save for user: ${req.params.username}`
  );
});
module.exports = dashboardRouter;
