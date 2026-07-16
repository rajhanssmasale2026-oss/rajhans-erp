const express = require("express");

const router = express.Router();

const RawMaterial = require("../models/RawMaterialModel");


// GET all raw materials
router.get("/", async (req, res) => {

  try {

    const materials =
      await RawMaterial.find();

    res.json(materials);

  } catch(error) {

    res.status(500)
    .json({
      message:error.message
    });

  }

});


// ADD raw material
router.post("/", async (req,res)=>{

  try{

    const material =
      new RawMaterial(req.body);

    const saved =
      await material.save();

    res.json(saved);

  }catch(error){

    res.status(500)
    .json({
      message:error.message
    });

  }

});


module.exports = router;