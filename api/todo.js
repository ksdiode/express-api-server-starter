const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/', async (req, res) => {
  const { page = 1 } = req.query;
  const option = { page };
  let todos = await Todo.paginate();
  res.json(todos);
});

router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const todo = await Todo.findById(_id);
    res.json(todo);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.post('/', async (req, res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.json(todo);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.put('/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const option = { new: true };
    const todo = await Todo.findByIdAndUpdate(_id, req.body, option);
    res.json(todo);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.delete('/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete(_id);
    res.json(todo);
  } catch (e) {
    console.log(e);
    res.status(404).json(e);
  }
});

module.exports = router;
