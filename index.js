const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/", () => {
  console.log("Hello World");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
