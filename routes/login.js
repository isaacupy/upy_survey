const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

//Processo de login y validacion
router.post('/user', (req, res) => {
  console.log('Logging in!');
  var uemail = req.body.uemail;
  var upassword = req.body.upassword;
  var login = false
  //Obtener los datos de students.json
  var data = fs.readFileSync(__dirname + '/../lib/students.json');
  var students = JSON.parse(data);
  //Valida los datos del body
  req.checkBody('uemail', 'Email is required').notEmpty();
  req.checkBody('upassword', 'Password is required').notEmpty();

	var errors = req.validationErrors();
	if (errors) {
		  console.log("Error");
      res.redirect('/login');
		  }
	else {
      for (var i = 0; i < students.length; i++) {
        if ((uemail == students[i].email)&&(upassword == students[i].password)){
          var login = true;
          break;
        }
      }
      if (login == true){
        res.redirect('/survey');
        console.log('Succesful');
      }
      else {
        console.log("Not succesful");
        res.redirect('/login');
      }
    };
});
    module.exports = router;
