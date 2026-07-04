const express = require("express");
const router = express.Router();

let sales = [];

router.post("/add", (req, res) => {
    const sale = req.body;
    sales.push(sale);
    res.json({ message: "Sale added", data: sale });
});

router.get("/all", (req, res) => {
    res.json(sales);
});

module.exports = router;