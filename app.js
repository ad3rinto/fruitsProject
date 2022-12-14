const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true });
// create ne schema
const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    rating:{
        type: Number,
        min:1,
        max:5
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    // name:"mango",
    rating:5,
    review: "solid fruit"
});

// fruit.save();

// Create schema for people and add person document to database

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", peopleSchema);

const person = new Person({
    name:"John",
    age:34
});

// person.save();

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

Fruit.updateOne({ _id: "631626255e5d657c4a436165" },{name: "Mango"}, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("updated successfully")
    }
})