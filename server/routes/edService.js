const express = require('express');
const router = express.Router();

var User= require("../models/User");
var Task= require('../models/Task');
const { auth } = require("../middleware/auth");

//frontta bir iş oluştururken bu fonksiyonu cagırıp bu bilgileri birde
//update user fonk ile userin joblarını update edecegiz.
router.post('/createTask', async function addToDB(req, res) {
   
    var task = new Task({
      _id: req.body._id,
      name: req.body.name,
      description: req.body.description,
      status:req.body.status,
      comments:req.body.comment,
      belongTo: req.body.belongTo
    } );
    try {
      doc = await task.save();
    
      
      return res.status(201).json(doc);
    }
    catch (err) {
      return res.status(501).json(err);
    }
  });

  router.post('/addComment', async function(req, res) {
 //düzenlenecek tam istedigimiz gibi calısmıyor!
   console.log(req.body.comment);
    try {
     doc= await Task.findOneAndUpdate(
        {_id:req.body._id },
        { $push:{ comments:req.body.comment } },
        {safe: true, upsert: true},
      )
      return res.status(201).json(doc);
    }
    catch (err) {
      return res.status(501).json(err);
    }
   
    
  }
  );


  module.exports = router;