/* importa o modulo express*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://fariajesiel:pegazus15@cluster0.6kn2t.mongodb.net/aulareact?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//libera o acesso para qualquer tipo de aplicação
app.use(cors());
//faz com que o express entenda o JSON
app.use(express.json());
app.use(routes);  
 
app.listen(3333);





//Metodos HTTP
//GET busca uma informação (lista alguma informação)
//POST usa para criar uma informação (salvar ou cadastrar)
//PUT edita alguma informação
//DELETE

//Tipos de parâmetros
//Query params são utilizado no metodo get, request.query (Filtros, ordenação, paginação...)
//Route params são utilizados nos metodos POST e DELETE, request.params (Identificar um recurso na alteração ou remoção)
//Body são utilizados nos metodos POST e PUT, request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional) ótimo para aplicações que não possuem muito relacionamento, ele funciona de forma que não precisa instalar