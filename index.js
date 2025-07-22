const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Career Code Cooking");
});

app.listen(port, () => {
  console.log(`Career Code Server Is running On port : ${port}`);
});
