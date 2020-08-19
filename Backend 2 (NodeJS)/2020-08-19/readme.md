# 2020-08-19

# Dagens genomgång
- MVC
    - **M**odels
        - Database models
    - **V**iews
        - HTML-rendering
    - **C**ontrollers
        - Business logic
- Modules
    - Du kan exportera moduler på flera olika sätt:
    ```javascript
  //module.js
    function getAName() {
  return "Stephan";
  }     
    exports.getAName = getAName()
    // index.js
  const aHuman = require('./module');
  console.log(`${aHuman.getAName()} is a human!`);
    ````
   Ett annat sätt att exportera på är att använda sig av module.exports:
   ```javascript
  //module.js
    module.exports = {
      getAName: function() {
          return "Stephan";
      }
  }
  //index.js
  const {getAName} = require('./module');
  console.log(`${getAName()} is a human!`);
  ```
    - modules.exports
    - export 
- Relationer (MongoDB)

# Modules
Modules är ett sätt att separera koden i andra filer.
Man har alltid en "main"-fil som allt startar i. Det kallas Entry-point.

Man skapar ett object som exporterar funktionerna. Ex
## Pre-ES6
```javascript
// module.js
module.exports = {
    foo: {a: 5, b: 7}
}

// index.js
const data = require('./module');
```
## Post-ES6
Inte native support i NodeJS.
```javascript
//module
export function foo() {}
export default function() {}

// index.js
import theDefault from './module.js'
import {foo} from './module.js'
import * as module from './module.js'
```

Olika alternativ:
- alternativ 1
rename files to .mjs
- alternativ 2
Adding "type": "module"
- alternativ 3
Använda babel

## Att använda babel
Packages to install:
- npm install --save-dev @babel/core @babel/node babel-cli
``
//package.json script
    "babel": "npx babel-node index",
    "bbuild": "npx babel src -d dist",
    "bstart": "npm run bbuild && node ./dist/index.js"
``
# Architektur
- strukturen av filer och mappar och vad dem innehåller
- system och under system i mapparna.
- separera olika logik.
    - Data logik
    - presentation logik
    - kontroller logik
    - Kallas MVC
        - **M**odels
            - Database models
        - **V**iews
            - HTML-rendering
        - **C**ontrollers
            - Business logic
# MVC
Mappstruktur
- root
    - database
    - controllers
    - models
    - routes
    app.js
    package.json
## Model

### Database file mongodb with mongoose
```javascript
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`;
mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {
    Post: mongoose.model('post', {
        title: String,
        content: String,
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment"
        }]
    }),
    Comment: mongoose.model('comment', {
        text: String,
    })
}
```
### Model file
```javascript
const {Post} = require('../database/mongodb');
module.exports = {
    insertPost: async (title, content) => {
        return await Post.create({
            title: title,
            content: content
        })
        .then((document,err ) => {
            if(err) return false;
            return document._id;
    });
}
```
## controller
```javascript
const MyModel = require('../models/myModel.js');

module.exports = {
    myResponseCallback: async(data) {
        
    }
}
```
## Route
````javascript
const MyController = require('Controller');
const {Router} = require('express');
Router.get('/hello' (req, res) => {
    res.json({hello: "World!"});
});

modules.exports = Router;
````

## View (Kommer inte röra under denna kurs)
```javascript
<!-- index.ejx -->
```

## app.js
```javascript
const express = require('express');
const routes = require('./routes/myroute');
const app = express();
app.use('/myBaseRoute', routes);
```

# Async / Await 
Promises har 3 olika tillstånd
- Pending - Du vet inte om du får något lego
- Resolved - Det gick bra att utföra
- Rejected - Det gick inte bra

```javascript
let askMom = new Promise((resolve, reject)=> {
    if(momIsHappy) {
        resolve('Lego köpt')
    }
    reject('No lego for you!');
});

askMom.then((Value) => {
    console.log(value)
}).catch((value) => {
    console.log(value);
})
```

### Exempel på callbackFunctions
```javascript
let array = [1,2,3,4,5,6,7,8,9,0,12];

function filter(array, condtionCallback) {
    let newArray = []
    for(let val of array) {
        if(condtionCallback(val)) {
            newArray.push(val);
        }
    }
    return newArray;
}

function isEven(num){
    return num % 2 = 0;
}

filter(array, isEven)
```

## promises
```javascript
console.log("started script")
let promise = new Promise ((resolve, reject) => {
    console.log("Promise callback")
    setTimeout(() => {
        resolve("Stuff");
    }, 1000)
    setTimeout(() => {
        reject("Err");
    }, 500)
});
promise.then((value) => {
    console.log(value);
    console.log("Resolved");
}).catch((value) => {
    console.log(value);
    console.log("Rejected");
})
console.log(promise);
console.log("End of script");
```

### grupperad 
```javascript
console.log("started script")
let promise = new Promise ((resolve, reject) => {
    console.log("Promise callback")
    setTimeout(() => {
        resolve("Stuff");
    }, 1000)
    setTimeout(() => {
        reject("Err");
    }, 500)
});

async function runPromise() {
    try {
        const value = await promise
        console.log(value);
        console.log("Resolved");
    } catch (error) {
        console.log(error);
        console.log("Rejected");
    }
    
}

runPromise();
console.log(promise);
console.log("End of script");
```