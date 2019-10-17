const fetch = require('node-fetch');
var data = {
    "date": 1571295394,
    "time": 5,
    "description": "description 1",
    "content": "content 1",
    "user": "user 1",
    "customer": "customer 1"
};

let response = await fetch("https://5da7897d23fa740014697829.mockapi.io/events", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});

const content = await response.json();

let getData = fetch("https://5da7897d23fa740014697829.mockapi.io/events")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });