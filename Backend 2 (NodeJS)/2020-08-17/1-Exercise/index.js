const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/text', (req, res) => {
    // res.send auto sets status 200, this is redundant code.
    // Not a best practice
    res.status(200).send('Hello World!');
});

app.get('/json', (req, res) => {
    res.json({
            person: {
                age: 29,
                name: "Stephan"
            }
        });
});

app.get('/file', (req, res) => {
   res.download('default.png');
});

app.listen(port, () => {
    console.log('Listening on port %d', port);
    console.log(`Listening on port ${port}`);
})