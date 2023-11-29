const { MongoClient } = require('mongodb')

const uri = "mongodb://127.0.0.1:27017"
const mongoClient = new MongoClient(uri)

const get_user = async () => {
    await mongoClient.connect()

    const dataUser = await mongoClient
    .db("crud_mongo")
    .collection("user")
    .find({})
    .toArray()

    console.log(dataUser);
    await mongoClient.close();
}

// get_user()

const add_user = async (name, age) => {
    await mongoClient.connect()

    const insertUser = await mongoClient
    .db("crud_mongo")
    .collection("user")
    .insertOne({name, age})

    console.log(insertUser);
    await mongoClient.close()
}

// add_user('jiang xie', 12)

