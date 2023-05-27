const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const dashboardRouter = require('./routes/dashboardRouter');
const loginRouter = require('./routes/loginRouter');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/dashboard', dashboardRouter);
// app.use('/login', loginRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route not found catch:
app.use('/', (req, res) => {
  res.status(404).send('Route not found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(4000, () => {
  console.log('running server on port 4000');
});
