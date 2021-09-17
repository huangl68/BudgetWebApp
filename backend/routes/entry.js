const express = require('express');
let Entry = require('../models/entry')
const router = express.Router();


router.route('/').get((req, res) => {
    Entry.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const category = req.body.category;
  const description = req.body.description;
  const amount = req.body.amount;

  const newEntry = new Entry({category, description, amount});

  newEntry.save()
    .then(() => res.json('Entry added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;