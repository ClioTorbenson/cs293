const express = require("express");
const jwt = require("jwt-simple");

const app = express();

app.use(express.json());
const secret = "supersecret";
app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000")
})