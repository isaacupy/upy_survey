const express = require('express');
const router = express.Router();
const path = require('path');


//Funcion que recopila los datos del survey
router.post('/send', (req, res) => {
  var question1 = req.body.teacher;
  var question2 = req.body.subject;
  var question3 = req.body.radius;

  var errors = req.validationErrors();
  if (errors) {
      console.log("error survey");
      console.log(errors)
      res.redirect('/survey');
      }
  else {
    console.log('Survey recieved!')
    console.log(req.body);
    };
});
module.exports = router;
