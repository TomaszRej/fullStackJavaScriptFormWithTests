const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const registeringForEventRoutes = require('./routes/registeringForEventRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use('/registerForEvent', registeringForEventRoutes);


app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

const db = config.get('mongoURI');

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true
})
  .then(() => {
    const port = 8000;
    app.listen(port, () => console.log(`Server started on port ${port}`));


  })
  .catch(err => console.log(err));



module.exports = app;