const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// for GET requests to the dashboard, load user avatar, and user saved data that matches the URL param
app.get('/dashboard', (req, res) => {
  res.json('some existing user data');
});

// for POST requests to dashboard endpoing, save data as a projection
app.post('/dashboard/:user/:id', (req, res) => {
  res.json(
    `projection with id: ${req.params.id}, was save for user: ${req.params.user}`
  );
});

app.listen(4000, () => {
  console.log('running server on port 4000');
});
