const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const URL = "mongodb://localhost:27017";

// database name
const dbName = "myproject";

// Create new instance of Mongoclient

const client = new MongoClient(URL);

//USe connection method to connect to the server
client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to the server");

    const db = client.db(dbName);

    client.close();

});
