const express = require('express')
const { MongoClient } = require('mongodb'); 
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv');
const cors = require("cors")

dotenv.config()




// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'PassManager';

// server work
const port = 3001
app.use(bodyParser.json())
app.use(cors())


client.connect();

// fetching the passwords
app.get('/', async (req, res) => {
const db =client.db(dbName);
const collection = db.collection('passwords');
const findResult = await collection.find({}).toArray();
res.json(findResult)
})

// saving the passwords
app.post('/', async (req, res) => {
    const password = req.body
const db =client.db(dbName);
const collection = db.collection('passwords');
const findResult = await collection.insertOne(password);
res.send({success : true, result : findResult})
})

// deleting the passwords
app.delete('/', async (req, res) => {
    const password = req.body
const db =client.db(dbName);
const collection = db.collection('passwords');
const findResult = await collection.deleteOne(password);
res.send({success : true, result : findResult})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
