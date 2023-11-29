const { MongoClient, ObjectId } = require('mongodb')

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

const update_user = async (id, name, age) => {
    await mongoClient.connect()

    const updateUser = await mongoClient
    .db("crud_mongo")
    .collection("user")
    .updateOne({_id: new ObjectId(id)}, {$set :{ name, age}})

    console.log(updateUser)
    await mongoClient.close()
}

// update_user("6567cc0860b03c53588ba1c9", "sulthan", 21)

const delete_data = async (id) => {
    await mongoClient.connect()

    const deleteUser = await mongoClient
    .db("crud_mongo")
    .collection("user")
    .deleteOne({ _id: new ObjectId(id)})

    console.log(deleteUser)
    await mongoClient.close()
}

// delete_data("6567c8e6b2904f6c20aec0f5")