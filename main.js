const express = require("express");
const bodyparser = require('body-parser')

const app = express();
const router = express.Router();
app.use('/', require('./rotas/download.js'))
app.use(express.static('public'));

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(3000, (port) => { // Subindo o servidor para a web.
    console.log("Rodando na porta 3000")
})