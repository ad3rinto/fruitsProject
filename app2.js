const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const URL = "mongodb://localhost:27017";

// database name
const dbName = "fruitsDB";

// Create new instance of Mongoclient

const client = new MongoClient(URL);

//USe connection method to connect to the server
client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to the server");

    const db = client.db(dbName);

    findDocuments(db, function(){
        client.close();
    })

    // insertDocuments(db, function(){
    //     client.close();
    // });

});

//inserting document into the database

const insertDocuments = function(db, callback) {
    // get the documents collection
    const collection = db.collection("fruits");
    //insert some documents
    collection.insertMany([
        {
            name:"Apple",
            score:8,
            review:"Great fruit"
    },
        {
            name:"Orange",
            score:6,
            review:"Kinda sour"
        },
        {name: "Banana",
        score:9,
        review:"Great fantastic healthy stuff"
    }
    ], function(err, result){
        assert.equal(err,null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}


const findDocuments = function(db, callback){
    //get the documents collection
    const collection = db.collection("fruits");
    //find some documents
    collection.find({}).toArray(function(err, fruits){
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
}