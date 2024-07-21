const express = require('express');
const router = express.Router();
const Person = require('./../models/Person.js')

router.post('/', async (req,res) => {
    try{
        const data = req.body;

        //create a newPerson model with the help og momgoose schema
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data saved");
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

router.get('/', async (req, res) => {
    try{
        const data = await Person.find();
        console.log("Data found");
        res.status(200).json(data);
    }
    catch(err){
        console.log("Internal Server Error");
        res.status(500).json({error: "Internal Server Error"});
    }
})

router.get('/:workType', async (req, res) => {
    try{
        const workType = req.params.workType;
        if(workType == 'Manager' || workType == 'Waiter' || workType == 'Chef'){
            const response = await Person.find({work: workType});
            console.log("Response fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: "Invalid work type"});
        }
    }
    catch(err){
        console.log("Internal Server Error");
        res.status(500).json({error: "Internal Server Error"});
    }
});

router.put('/:id', async (req, res) => {
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // return the updated document
            runValidators: true, // run mongoose validation
        })

        if(!response){
            console.log("Person not found");
            res.status(404).json({error: "Person not found"});
        }

        console.log("Person data updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log("Internal Server Error");
        res.status(500).json({error: "Internal Server Error"});
    }
});


router.delete('/:id', async (req, res) => {
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            console.log("Person not found");
            res.status(404).json({error: "Person not found"});
        }

        console.log("Person data deleted successfully");
        res.status(200).json({message: "Person deleted successfully"});
    }
    catch(err){
        console.log("Internal Server Error");
        res.status(500).json({error: "Internal Server Error"});
    }
});

module.exports = router;