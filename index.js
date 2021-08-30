const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');

//conecta banco de dados
mongoose.connect('mongodb+srv://userCadastro:ucadastro@cluster0.94zbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
   
});
app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('7000', () => {
    console.log("rodando na porta 7000");
});