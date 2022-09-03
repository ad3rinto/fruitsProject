const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true });
// create ne schema
// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });

// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name:"apple",
//     rating:7,
//     review: "solid fruit"
// });

// fruit.save();

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", peopleSchema);

const person = new Person({
    name:"John",
    age:34
});

person.save();
