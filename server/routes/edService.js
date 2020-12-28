const express = require("express");
const router = express.Router();

var { User } = require("../models/User");
var Task = require("../models/Task");
const { auth } = require("../middleware/auth");

router.post("/createTask", async function addToDB(req, res) {
  var task = new Task({
    _id: req.body._id,
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    comments: req.body.comment,
    belongTo: req.body.belongTo,
  });

  
  const taskBody = [{ jobID: req.body._id, status: false }];

  try {
    doc = await task.save();
    await User.updateMany(
      { username: { $in: req.body.belongTo } },
      { $push: { tasks: taskBody } },
      { safe: true, upsert: true }
    );

    return res.status(201).json(doc);
  } catch (err) {
    return res.status(501).json(err);
  }
});

router.post("/addComment", async function (req, res) {
  console.log(req.body._id);
  
  try {
    doc = await Task.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { comments: req.body.comment } },
      { safe: true, upsert: true }
    );
    return res.status(201).json(doc);
  } catch (err) {
    return res.status(501).json(err);
  }
});

router.get("/getJobs",async function(req,res){

  try {
    doc = await Task.find({});
    console.log(doc[0].belongTo);
    return res.status(201).json(doc);
  }
  catch
  {
    return res.status(501).json(err);
  }
})

router.get("/userDetail/:username", async function(req,res){

  try
  {
    doc = await User.findOne({
      username:req.params.username,
    })
    return res.status(201).json(doc);
  }
  catch
  {
    return res.status(501).json(err);
  }
})



module.exports = router;
