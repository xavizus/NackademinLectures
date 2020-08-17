let Datastore = require('nedb');
let db = new Datastore({
    filename: './aDBFile.db'
});
db.loadDatabase((err) => {
    if (err) {
        console.log('Sumting Wrong');
    }
});

let dataObject = {
    person: {
        age: 28,
        name: "Bryan"
    }
};

db.insert(dataObject, (err, newDoc) => {
    db.update({"person.age": 28}, {$set: { "person.isOld": true }}, (err) => {
        db.findOne({"person.age": 28},(err, doc) => {
            db.remove({_id: doc._id}, {}, (err, numRemoved) => {
                console.log(numRemoved);
            });
        });
    });
});





