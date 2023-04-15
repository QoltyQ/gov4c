const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const auth = require("./routes/auth");
const otp = require("./routes/otp");
const order = require("./routes/order");
const sc = require("./routes/sc");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/", auth);
app.use("/otp", otp);
app.use("/order", order);
app.use("/servicecenter", sc);

try {
  db.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
