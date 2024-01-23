const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());  // Parse JSON in requests


// users route for page query

app.get('/users', (req, res) => {
    const page = req.query.page;  // Assuming your input field has the name 'inputData'
    const downlimit = ((page-1)*10+1);
    const uplimit = page*10;
    console.log('Received data from UI:', page);  
    res.send(`Data received for page: page successfully! from S.no ${downlimit} to ${uplimit}`);
});

// user route by ID

app.get('/users/:id',(req,res) => {
    const userId = req.params.id;
    console.log(`${userId}`);
    res.send(`Data for ID ${userId} is received`);
})
// add routes

app.get('/add',(req,res) =>{
    res.sendFile(path.join(__dirname+'/public/add.html'));
    // console.log('Received data from UI:', inputData);
    // res.send('Data received successfully!');
});
app.post('/add',(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    console.log(`name${name} email ${email} phone ${phone}`)
    res.send("Data received successfully");
});
// users route for searching either by id or name
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
