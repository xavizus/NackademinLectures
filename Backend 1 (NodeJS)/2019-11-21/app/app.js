// Use strict mode.
'use strict';

// load http module
const http = require('http');

//load express module
const express = require('express');

//load filestream module
const fs = require('fs');

// load express-session module
const session = require('express-session');

// initialize express
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded());
app.use(express.json());
app.use(session({
    secret: 'someRandomSecret',
    cookie: {
        maxAge: 14 * 24 * 60 * 60 * 1000
    }
}));

app.get('/todoList', (req, res) => {
    if (!req.session) {
        req.session.content = {};
    }
    res.render('todoList', req.session);
});

app.post('/todoList/add', (req, res) => {
    let newTodoItem = req.body.todoItem;
    let id = 0;
    if (req.session.content) {
        id = req.session.content.length;
    } else {
        req.session.content = [];
    }

    req.session.content.push({ id: id, todoItem: newTodoItem });
    console.log(req.session.content);

    res.redirect('/todoList');
});

app.get('/todoList/delete/:id', (req, res) => {

    for (let todoItemIndex in req.session.content) {
        if (req.session.content[todoItemIndex].id == req.params.id) {
            req.session.content.splice(todoItemIndex, 1);
        }
    }

    res.redirect('/todoList');
});

app.get('/', (req, res) => {
    let content = {
        title: 'Hello world',
        roomNumber: 1,
        roomFloor: 9,
        hotelName: 'idk',
        aRandomArray: ['ran', 'dom', 'is', 'fun']
    };
    res.render('index', content);
});

app.get('/counter', (req, res) => {
    res.render('index2');
});

app.post('/counter/postData', (req, res) => {
    let content = {
        countTo: req.body.number
    };
    res.render('index2', content);
});

app.use('/public', express.static(__dirname + '/public'));

app.post('/handle-data', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let color = req.body.color;

    res.send(`Your name is ${name}, and you are ${age} old and you like the color ${color}`);
});

// route with variables name :age and :name

app.get('/age/:age/:name', function(req, res) {

    let age = Number(req.params.age);

    let returnString = ""
    if (age < 22) {
        returnString = `You are not at drinking age. Your age is ${age}`;
    } else if (age >= 22) {
        returnString = `You are at drinking age!Congrats! Your age is ${age}`;
    } else {
        returnString = `Your input value is not a number! age: ${age}`;
    }

    res.send(`Your name is ${req.params.name}`);
    res.send(returnString);
});

let httpsServer = http.createServer(app).listen(8080);