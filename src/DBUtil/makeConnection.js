const   express = require('express'),
        cors = require('cors'),
        mysql = require('mysql'),
        config = require('./config')

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

app.get('/products', (req, res) =>{
    connection.query('select * from products', (err, results) => {
        if(err){
            res.send(err);
        }
        else{
            res.json({data: results})
        }
    })
})

app.get('/members/add', (req, res) =>{
    const {firstname, lastname, spouse, email, membership_level, address, address2, district, city, postal_code, phone} = req.query;
    console.log( `insert into address(address, address2, district, city, postal_code, phone) values('${address}','${address2}', '${district}', '${city}',${postal_code},'${phone}'); \nselect @addr := LAST_INSERT_ID(); \ninsert into members(firstname, lastname, spouse, address_id, email, membership_level) values ('${firstname}', '${lastname}', '${spouse}', @addr, '${email}', '${membership_level}');`);
    connection.query(`insert into address(address, address2, district, city, postal_code, phone) values('${address}','${address2}', '${district}', '${city}',${postal_code},'${phone}'); select @addr := LAST_INSERT_ID(); insert into members( firstname, lastname, spouse, address_id, email, membership_level) values ('${firstname}', '${lastname}', '${spouse}', @addr, '${email}', '${membership_level}');`, (err, results) =>{
        if(err){
            res.send(err);
        }
        else{
            res.send("added New Member")
        }
    })
    
})

app.get('/products/add', (req, res) =>{
    const {sku, name, cost, stock} = req.query;
    console.log( `insert into products(SKU, label, cost, stock) values(${sku},'${name}',${cost},${stock});`);
    connection.query(`insert into products(SKU, label, cost, stock) values(${sku},'${name}',${cost},${stock});`, (err, results) =>{
        if(err){
            res.send(err);
        }
        else{
            res.send("added new product")
        }
    })
    
})

app.get('/products/get', (req, res) =>{
    const {sku} = req.query;
    console.log( `select * from products where SKU=${sku};`);
    connection.query(`select * from products where SKU=${sku};`, (err, results) =>{
        if(err){
            res.send(err);
        }
        else{
            res.json({data:results})
        }
    })
    
})


app.listen(3001, () => {console.log("Listening on port 3001")})