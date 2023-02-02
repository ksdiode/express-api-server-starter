var router = require('express').Router();

router.get('/', async (req, res) => {
  res.json({
    greet: 'hello',
  });
});

router.get('/:_id', async (req, res) => {
  const { _id } = req.params;

  res.json({ _id });
});

router.post('/', async (req, res) => {
  const data = req.body;

  res.json(data);
});

router.put('/:_id', async (req, res) => {
  const { _id } = req.params;
  const data = req.body;

  res.json(data);
});

router.delete('/_id', async (req, res) => {
  const { _id } = req.params;
  res.json({ result: 'ok' });
});

module.exports = router;
