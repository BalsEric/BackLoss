const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');
const Formular = mongoose.model('Formular');
const Question = mongoose.model('Question');

//POST new user route (optional, everyone has access)
router.post('/', (req, res, next) => {
  const question = new Question({
      type: 'tesing',
      text: 'fasfsa',
      answers: ['fasf','fffff'],
      required: true
  });
  question.save().then( (quest) => {
      const formular = new Formular({ 
            title: 'afas',
            description: 'fasfas',
            questions: [quest ]
        });
    formular.save().then( (form) => {
        res.send(form);
    })
  })
  res.send("fasf");
});


module.exports = router;