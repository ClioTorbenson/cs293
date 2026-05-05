

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

const mysql = require('mysql2')
const connection = mysql.createConnection
({
    host: 'localhost',
    user: 'root',
    password: 'cliotorbenson', //your password that you set while installing the database
    database: 'formSubmission' //your database name

})
connection.connect((err)=>{

  if(err) {
    console.error('Connection error:', err.message);
    return;
  }
  console.log('Connected to MySQL!')
});

app.get('/', (req,res)=> {
res.sendFile(path.join(__dirname, "public/contact.html"));})


app.post("/submit", (req,res) => {
    console.log("Received data:", req.body);
  const { firstName, lastName, email, message } = req.body;
  const sql = 'INSERT INTO contactInfo (firstName, lastName, email, message) VALUES (?, ?, ?, ?)'
  connection.query(sql, [firstName, lastName, email, message], (err, result) => {
        if (err) {
            console.error('Insert Error:', err.message);
            return res.status(500).send("Database error occurred.");
        }
        
        console.log('Data inserted, ID:', result.insertId);
        res.redirect("/");
    });
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
