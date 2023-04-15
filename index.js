const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const authRoute = require("./routes/auth");
const requestsRoute = require("./routes/requests");


require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/", authRoute);
app.use('/requests', requestsRoute)

try {
  db.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
