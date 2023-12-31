const express = require('express');
const app = express();
const morgan = require('morgan');
const rotaAlunos = require('./routes/books');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })) 
app.use(express.json());

app.use('/books', rotaAlunos);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
})

module.exports = app;