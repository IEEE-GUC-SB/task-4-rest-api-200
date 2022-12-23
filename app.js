const express = require("express");
const app = express();

app.use("/posts", () => {
  console.log("middleware");
});
//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
