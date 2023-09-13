const express = require('express')
const router = express.Router()
const knex = require('knex') (require('../knexfile').development)

const listabooks = {
    books: []
};

router.get('/', (req, res) => {
    knex("books")
    .then(books => res.status(200).json(books))
});

router.get('/:id_book', (req, res, next) => {
    knex("books")
    .where({id: req.params.id_book})
    .then(books => {
        if (books.length) {
            res.status(200).json(books[0])
        } else {
            return res.status(404).json({ mensagem: 'book not found' })
        }
    })
});

router.post('/', (req, res) => {
    const { nome, autor, genero } = req.body;

    if (!nome || !autor || !genero) {
        return res.status(400).json({ mensagem: 'Fill all required fields.' });
    }

    knex('books')
        .insert({ nome, autor, genero })
        .returning('*')
        .then(book => {
            res.status(201).json(book[0]);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ mensagem: 'Error in creation of book' });
        });
});

router.put('/:id_book', (req, res) => {
    const { nome, autor, genero  } = req.body;

    if (!nome || !autor || !genero) {
        return res.status(400).json({ mensagem: 'Fill all required fields.' });
    }

    knex('books')
        .where({ id: req.params.id_book })
        .update({ nome, autor, genero })
        .returning('*')
        .then(book => {
            if (book.length) {
                res.status(200).json(book[0]);
            } else {
                res.status(404).json({ mensagem: 'Book not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ mensagem: 'Error in update book...' });
        });
});

router.delete('/:id_book', (req, res) => {
    knex('books')
        .where({ id: req.params.id_book })
        .del()
        .then(deletedCount => {
            if (deletedCount > 0) {
                res.status(204).send();
            } else {
                res.status(404).json({ mensagem: 'book not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ mensagem: 'Error in delete book.' });
        });
});

module.exports = router