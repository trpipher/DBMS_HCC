const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const config = require('./config')

const connection = mysql.createConnection(config);
const app = express();

app.use(cors());

app.get('/address', (req, res) =>{
    connection.query('select * from address', (err, results) => {
        if(err)
            res.send(err);
        else
            res.json({
                data: results
            })
    })
})

app.get('/members', (req, res) =>{
    connection.query('select * from members', (err, results) => {
        if(err){
            res.send(err);
        }
        else{
            res.json({data: results})
        }
    })
})

app.get('/members/add?', (req, res) =>{
    connection.query('select * from members', (err, results) => {
        if(err)
            res.send(err);
        else
            res.json({
                data: results
            })
    })
})
app.listen(3001, () => {console.log("Listening on port 3001")})