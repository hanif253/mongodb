const { MongoClient } = require("mongodb");
const express = require("express");

const url = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(url); 
const database = "collage";

async function getData() {
    let result = await client.connect();
    let db = result.db(database);        
    let collection = db.collection("test"); 
    let response = await collection.find({}).toArray();
    console.log(response); 
}

getData();
