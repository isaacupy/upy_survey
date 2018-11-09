const express = require('express');
const router = express.Router();
const path = require('path');


//Funcion que recopila los datos del survey
router.post('/send', (req, res) => {
  var survey = {
    answers: req.body
  };
  var errors = req.validationErrors();
  if (errors) {
      console.log("error survey");
      console.log(errors)
      res.redirect('/survey');
      }
  else {
    console.log('Survey recieved!')
    console.log(req.body);
    console.log(survey.answers);
    res.redirect('/thanks');
    };
});
module.exports = router;
