const express = require('express');
const path = require('path');
const app = express();
const dashboardRouter = require('./routes/dashboardRouter');
const loginRouter = require('./routes/loginRouter');

app.use(express.static(path.join(__dirname, 'build')));

app.use('/dashboard', dashboardRouter);
// app.use('/login', loginRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(4000, () => {
  console.log('running server on port 4000');
});
