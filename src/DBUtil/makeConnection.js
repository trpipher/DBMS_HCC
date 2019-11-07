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

app.get('/members/add', (req, res) =>{
    const {id, firstname, lastname, spouse, email, membership_level, address, address2, district, city, postal_code, phone} = req.query;
    console.log( `insert into address(address, address2, district, city, postal_code, phone) values('${address}','${address2}', '${district}', '${city}',${postal_code},'${phone}'); \nselect @addr := LAST_INSERT_ID(); \ninsert into members(id,firstname, lastname, spouse, address_id, email, membership_level) values (${id},'${firstname}', '${lastname}', '${spouse}', @addr, '${email}', ${membership_level});`);
    connection.query(`insert into address(address, address2, district, city, postal_code, phone) values('${address}','${address2}', '${district}', '${city}',${postal_code},'${phone}'); select @addr := LAST_INSERT_ID(); insert into members(id, firstname, lastname, spouse, address_id, email, membership_level) values (${id},'${firstname}', '${lastname}', '${spouse}', @addr, '${email}', ${membership_level});`, (err, results) =>{
        if(err){
            res.send(err);
        }
        else{
            res.send("added New Member")
        }
    })
    
})
app.listen(3001, () => {console.log("Listening on port 3001")})