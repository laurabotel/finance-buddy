const express = require('express');
const dashboardRouter = express.Router();

// for GET requests to the dashboard, load user avatar, and user saved data that matches the URL param
dashboardRouter.get('/', (req, res) => {
  res.json('some existing user data');
});

// for POST requests to dashboard endpoing, save data as a projection
dashboardRouter.post('/:user/:id', (req, res) => {
  res.json(
    `projection with id: ${req.params.id}, was save for user: ${req.params.user}`
  );
});
module.exports = dashboardRouter;
