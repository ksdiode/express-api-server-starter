const mongoose = require('mongoose');
const Todo = require('../models/todo');
const MONGO_URI = process.env.DB_URI;
console.log(MONGO_URI);

mongoose.set('strictQuery', false);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .then(async () => {
    console.log(await Todo.countDocuments({}));
  })
  .catch((e) => console.error(e));
