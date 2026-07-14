const express = require("express");
const cors = require("cors");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Test API
app.get("/", (req, res) => {

  res.send("Rajhans ERP Backend Running");

});


// Server Start
const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});