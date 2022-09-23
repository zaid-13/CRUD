const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://zaid:zaidadmin@cluster0.9p1rhbx.mongodb.net/usersDB?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => console.log("listening to " + port));
  })
  .catch((err) => {
    console.log("cannot connect to the database: ", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend</h1>");
});

app.get("/api", (req, res) => {
  res.send("<h1>Welcome to the API</h1>");
});

app.use(router);
