const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
const salesRoutes = require("./routes/salesRoutes");
app.use("/sales", salesRoutes);

// HOME
app.get("/", (req, res) => {
    res.send("🚀 Rajhans ERP Server Running");
});

// START SERVER
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});