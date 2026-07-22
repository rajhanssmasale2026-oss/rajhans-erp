const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = require("./db");

// Routes
const productRoutes = require("./routes/productRoutes");
const rawMaterialRoutes = require("./routes/rawMaterialRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");
const salesRoutes = require("./routes/salesRoutes");
const reportRoutes = require("./routes/reportRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const sellRoutes = require("./routes/sellRoutes");
const userRoutes = require("./routes/userRoutes");
const settingsRoutes = require("./routes/settingsRoutes");

// Home
app.get("/", (req, res) => {
  res.send("Rajhans ERP Backend Running");
});

// Database Test
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      time: result.rows[0].now,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message,
    });

  }
});

// Product Routes
app.use("/products", productRoutes);

// Raw Material Routes
app.use("/raw-materials", rawMaterialRoutes);

// Purchase Routes
app.use("/purchases", purchaseRoutes);

// Sales Routes
app.use("/sales", salesRoutes);

// Report Routes
app.use("/reports", reportRoutes);

// Expense Routes
app.use("/expenses", expenseRoutes);

// Sell Routes
app.use("/sell", sellRoutes);

app.use("/users", userRoutes);

app.use("/settings", settingsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});