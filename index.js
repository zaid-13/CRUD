const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const app = express();

app.use(express.json());

const uri =
  "mongodb+srv://zaid:zaidadmin@cluster0.9p1rhbx.mongodb.net/usersDB?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    app.listen(3000, () => console.log("listening to 3000"));
  })
  .catch((err) => {
    console.log("cannot connect to the database: ", err);
  });

app.get("/api", (req, res) => {
  res.send("<h1>Welcome to the API</h1>");
});

app.use(router);
