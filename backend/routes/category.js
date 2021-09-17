const express = require('express');
const mongoose = require('mongoose');
let Category = require('../models/category')
const router = express.Router();

router.route('/').get((req, res) => {
    Category.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const category = req.body.category;
  
    const newEntry = new Category({category});
  
    newEntry.save()
      .then(() => res.json('Entry added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/').put((req, res) => {
  const category = req.body.category;

  const newEntry = new Category({category});



  Category.updateOne({_id: mongoose.Types.ObjectId("613bb8a3c3a535b8601e9852")},{category: category})
  .then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        errorMessage: error
      });
    }
  );
})

module.exports = router;