const customersData = require('./data.json');
const customers = customersData.customers;
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public'));

let router = express.Router();

router.get('/', (req, res) => {
    res.send(customersData);
});

router.get('/customer/:id', (req, res) => {
    let id = req.params.id;
    customers.map((customer) => {
        console.log(customer);
        if (customer.id == id) {
            res.send(customer);
            return;
        }
    })
    res.send(`No customer with id ${id} was found!`);
});

router.get('/customer/city/:city', (req, res) => {
    let city = req.params.city;

    let customersByCity = customers.filter(customer => {
        return customer.city == city;
    });

    if (!customersByCity) {
        res.send(`No customer at city ${city} exists`);
        return;
    }

    res.send(customersByCity);
});

router.get('/customer/:id/order', (req, res) => {
    let id = req.params.id;

    customers.map((customer) => {
        console.log(customer);
        if (customer.id == id) {
            res.send(customer.orders);
            return;
        }
    })
    res.send(`No customer with id ${id} was found!`);
});

app.use('/api/v1', router);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);