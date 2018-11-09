//Prerequisitos de express y otras dependencias
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
//Routes declaradas
const login = require('./routes/login')
const survey = require('./routes/survey')
//Le dice al servidor que direccion es absoluta
app.use(express.static(__dirname + '/public'));
//Middleware de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//Express Validator Middleware //
app.use(expressValidator());
//Selecciona el puerto donde trabajmos
const port = 3000;
//Inicializa el servidor de ExpressJS
app.listen(port, () => console.log(`Server started, listening port: ${port}!`))
//Inicializando las rutas
const router = express.Router();
app.use('/login', login);
app.use('/survey', survey);
//Reenderizado de views
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/public/login.html'));
});
app.get('/survey', (req, res) => {
 res.sendFile(path.resolve(__dirname + '/public/survey.html'));
});
app.get('/thanks', (req, res) => {
 res.sendFile(path.resolve(__dirname + '/public/thanks.html'));
});
//Middleware de las routas, hace que esperen ids.
app.use('/login/:id', (req, res) => {
  console.log('Request Type:', req.method);
  next();
});
app.use('/survey/:id', (req, res) => {
  console.log('Request Type:', req.method);
  next();
});
