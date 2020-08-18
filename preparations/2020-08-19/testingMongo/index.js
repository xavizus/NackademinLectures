const mongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;
const URI = "mongodb://localhost:27017/mydb";

mongoClient.connect(URI, { useUnifiedTopology: true }).then(async (client) => {
    if (!client) {
        throw new Error("Could not create a connection to DB");
    }
    let db = client.db('testDB');

    async function insertOne(collectionName, dataToInsert) {
        let collection = db.collection(collectionName);
        let id = await collection.insertOne(dataToInsert)
            .then(result => {return result.insertedId});
        return id;
    }

    async function insertMany(collectionName, dataToInsert) {
        let collection = db.collection(collectionName);
        let id = await collection.insertMany(dataToInsert)
            .then(result => {return result.insertedId});
        return id;
    }

    async function insertPost() {
        try {
            let collectionName = 'posts';
            let data = {
                title: "Once a day",
                content: "I got pretty much all the coins I can ask for!"
            }
            return await insertOne(collectionName, data);
        } catch(err) {
            console.log(err);
        }
    }

    async function insertComment(postId) {
        try {
            let collectionName = 'comments';
            let data = {
                content: "I got pretty much all the coins I can ask for!",
                post_id: postId
            };
            return await insertOne(collectionName, data);

        } catch(err) {
            console.log(err);
        }
    }
    async function insertManyComments(postId) {
        try {
            let collectionName = 'comments';
            let data = [{
                content: "I got pretty much all the coins I can ask for!",
                post_id: postId
            },
                {
                    content: "I believe I can code. I believe I can touch the cores.",
                    post_id: postId
                },
                {
                    content: "I hate callbacks.",
                    post_id: postId
                },
                {
                    content: "I really REALLY h8 callbacks.",
                    post_id: postId
                }
            ];
            return await insertMany(collectionName, data);

        } catch(err) {
            console.log(err);
        }
    }

    async function find(collectionName, dataToInsert) {
        let collection = db.collection(collectionName);
        let results = await collection.find(dataToInsert).toArray();
        return results;
    }

    async function findAllCommentsByPostId(postId) {
        try {
            let collectionName = 'comments';
            let query = {
                "post_id": postId
            };
            return await find(collectionName, query);

        } catch(err) {
            console.log(err);
        }
    }

    let postId = await insertPost();
    let commentId = await insertManyComments(postId);
    let findAllComments = await findAllCommentsByPostId(postId);
    console.log(findAllComments)
}).catch(err => {console.log(err)});


