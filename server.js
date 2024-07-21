
// const notes = require('./notes.js')

// const _ = require('lodash');  // _ is just a practice, you can give any name

// const fs = require('fs');
// const os = require('os');       // give some details about system

// let user = os.userInfo();
// console.log(user);

// fs.appendFile("Greet.txt", "Hello Harsha" + " ", () => {   // if the file Greet.txt already exists, then it will keep adding int that file only, otherwise it will create a new file
//     console.log("Appended");
// })


// console.log(os); // give all the functionalities of os

// let age = notes.age;
// console.log(notes.fun(age, 4));


// const arr = [1,2,3,4,1,2,"Harsha", "Harsha"];
// const new_arr = _.uniq(arr);   // functionality provided by Lodash
// console.log(new_arr);
// console.log(_.isString(arr));

const db = require('./db.js')
const express = require('express');
// const Person = require('./models/Person.js')
// const MenuItem = require('./models/Menuitem.js')
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(bodyParser.json());   //req.body

app.get('/', (req, res) => {
    res.send("This is home page");
})

// app.post('/person', async (req,res) => {
//     try{
//         const data = req.body;

//         //create a newPerson model with the help og momgoose schema
//         const newPerson = new Person(data);
//         const response = await newPerson.save();
//         console.log("Data saved");
//         res.status(200).json(response);
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({error: "Internal Server Error"});
//     }
// });

//get all the person data



//import the router file
const personRoutes = require('./routes/personRoutes.js');
//use the router
app.use('/person', personRoutes);
const menuRoutes = require('./routes/menuRoutes.js');
app.use('/menuitem', menuRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server listening on port 3000");
})


//first commit
//thirdt commit for testing