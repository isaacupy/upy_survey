//Prerequisitos de express
const express = require('express');
const app = express();
const port = 3000;
//Prerequisitos de MongoDB
var mongoclient = require('mongodb').mongoclient; 
//Le dice al servidor que direccion es absoluta
app.use(express.static(__dirname + '/public'));
//Manda a la pagina principal
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
