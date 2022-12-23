const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//Routes
const route = require("./userRoutes");
app.use("/api/users", route);

//DB
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://mohamedhatem:yywwbb12@cluster0.d31talr.mongodb.net/?retryWrites=true&w=majority",
  () => console.log("connected to db")
);

app.listen(3000);
