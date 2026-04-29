// console.log('Start');

// setTimeout(()=>{
//     console.log('Inside Timeout');
// }, 2000);

// console.log('End'); 

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     fs.readFile("index.html", (err, data) => {
//         res.writeHead(200, {"Content-Type": "text/html"})  // status code, then type of data to write
//         res.write(data);  // reading the file index.html and writing it in the server
//         res.end();  // stops waiting for response
//     })
// });

// server.listen(3000, ()=> {
//     console.log('Server running on http://localhost:3000');
// })

// const express = require("express");
// const app = express();

// app.use(express.urlencoded({extended:false}));

// app.post("/form", (req, res)=> {
//     res.send(req.body.name);
// })

// app.get("/user/:name", (req, res) => {
//     res.send(`Hello, ${req.params.name}`);  // makes url dynamic
// })

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000')
// });

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));


app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
