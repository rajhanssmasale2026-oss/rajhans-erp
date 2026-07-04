const express = require("express");
const app = express();

app.use(express.json());

// ROUTES IMPORT
const salesRoutes = require("./src/routes/salesRoutes");

// ROUTES USE
app.use("/sales", salesRoutes);

// HOME
app.get("/", (req, res) => {
    res.send("🚀 Rajhans ERP Running Successfully");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});