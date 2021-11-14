// Iteration #1

const mongoose = require("mongoose");
const dbUri = 'mongodb+srv://AdrianAranda:breakerone2"@playground.mwk2u.mongodb.net/delivery-drones?retryWrites=true&w=majority';
const Drone = require("../models/drone.model");
console.log("hello")



const threeDrones = [
    {name: "Smol Falcon XV",
    propellers: 2,
    maxSpeed: 5},
    {name: "Rouvette Amanda XXIV",
    propellers: 6,
    maxSpeed: 10}, 
    {name: "Nico's Bass",
    propellers: 2,
    maxSpeed: 5}]
    
    
    mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to DB!") )
    .then(() => { return Drone.create(threeDrones)})
    .then((result) => console.log("Drones Updated:", result))
    .then(() => console.log("Drones Updated Successfully."))
    .then(() => mongoose.disconnect())
    .catch((error) => console.log("Connection Failed"))