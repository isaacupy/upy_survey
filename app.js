//Prerequisitos de express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
//Prerequisitos de MongoDB
var MongoClient = require('mongodb').MongoClient;
//Routes declaradas
const login = require('./routes/login')
const survey = require('./routes/survey')
//Le dice al servidor que direccion es absoluta
app.use(express.static(__dirname + '/public'));
//Middleware de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//Inicializando las rutas
app.use('/login', login)
app.use('/survey', survey)
//Selecciona el puerto donde trabajmos
const port = 3000;
//Inicializa el servidor de ExpressJS
app.listen(port, () => console.log(`Server started, listening port: ${port}!`))
