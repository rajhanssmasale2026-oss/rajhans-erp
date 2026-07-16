const express = require("express");

const router = express.Router();

const rawMaterialController =
require("../controllers/rawMaterialController");


// GET Raw Materials
router.get(
  "/",
  rawMaterialController.getRawMaterials
);


// POST Raw Material
router.post(
  "/",
  rawMaterialController.addRawMaterial
);


module.exports = router;