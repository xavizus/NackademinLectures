const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static(__dirname + '/public'));

let books = [];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book-list', (req, res) => {
    res.sendFile(__dirname + '/public/book-list.html');
});

app.get('/new-book', (req, res) => {
    res.sendFile(__dirname + '/public/new-book.html');
});

app.post('/book', (req, res) => {
    const book = req.body;

    console.log(book);
    books.push(book);

    res.send('book is added to the database');

});

app.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Book not found');
});


app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});

app.listen(port);