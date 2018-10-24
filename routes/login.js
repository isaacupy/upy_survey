const express = require('express');
const router = express.Router();
const path = require('path');

//Processo de login y validacion
router.post('/user', (req, res) => {
  console.log('Logging in!');
  var uemail = req.body.uemail;
  var upassword = req.body.upassword;
  var user = {
    email: "test@upy.edu.mx",
    password: "test"
  };
  req.checkBody('uemail', 'Email is required').notEmpty();
  req.checkBody('upassword', 'Password is required').notEmpty();
  console.log(req.body)
	var errors = req.validationErrors();
	if (errors) {
		  console.log("error");
      res.redirect('/login');
		  }
	else {
    if ((user.email == uemail)&&(user.password == upassword)){
      res.redirect('/survey');
      console.log('succesful!');
    }
    else {
      console.log("not succesful :c");
      res.redirect('/login');
    };
  }
});
    module.exports = router;
