const express = require('express');
const router = express.Router();
const subscriberModel= require('../models/subscribers');


// 1. Get an array of all subscribers from the database
router.get("/", async(req,res)=>{
    try{
        const subscribers = await subscriberModel.find().select("-__v");
        res.status(200).json(subscribers);
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }

});



// 2. Get an array of subscriber's name and subscribed  channels name
router.get("/names", async (req, res) => {
    try {
      const subscribers = await subscriberModel.find().select("-_id -subscribedDate -__v");
      res.status(200).json(subscribers);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // 3. Get a subscriber from a perticular id
  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const data = await subscriberModel.findById(id).select("-__v").then((data) => {
          if (!data) {
         
            error = Error(`Subscriber is not found with the given _id: ${id}.`);
            res.status(400).json({ message: error.message });
          } else {
            res.status(200).json(data);
          }
        });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  


module.exports = router;