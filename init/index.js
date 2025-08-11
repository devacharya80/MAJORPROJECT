const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const data = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

// ...existing code...
const initDB = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data); // <-- use initData.data here
    console.log("data was initialized");
}
// ...existing code...
initDB();