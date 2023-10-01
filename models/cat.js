const client = require('../dbConnection');

const collection = client.db().collection('Cat');

async function postCat(cat, callback) {
    try {
        const result = await collection.insertOne(cat);
        callback(null, result)
    } catch (error) {
        callback(error,nil)
    }
}

async function getAllCats(callback) {
    const result = await collection.find({}).toArray(callback);
    callback(result)
}

async function getAllCats(callback) {
    const result = await collection.find({}).toArray(callback);
    callback(result)
}

module.exports = { postCat, getAllCats }