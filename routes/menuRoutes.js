const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem.js')


router.post('/', async (req,res) => {
    try{
        const data = req.body;

        //create a newPerson model with the help og momgoose schema
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log("Menu Data saved");
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

router.get('/', async (req, res) => {
    try{
        const data = await MenuItem.find();
        console.log("Menu Data Found");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
});

router.get('/:tasteType', async(req, res) => {
    try{
        const tasteType = req.params.tasteType;
        if(tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy'){
            const data = await MenuItem.find({taste: tasteType});
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error: "Invalid taste type"});
        }
    }
    catch(err){
        res.status(500).json({error: "inertnal server error"});
    }
});

module.exports = router;