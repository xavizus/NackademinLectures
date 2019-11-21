# 2019-11-21

POST-request sparas i header (säkrare)
GET-request sparas i url (localhost:8080/?age=20&name=stephan)

För att läsa POST-request
````javascript
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});
````

För att läsa GET-request 
````javascript
app.get('/', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});
````

Vad gör app.use(), den är för att ladda in middlewear.