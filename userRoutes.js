const express = require("express");
const router = express.Router();
const User = require("./models/users");

router.post("/createuser", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/getuser", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.delete("/deleteuser", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOneAndDelete({ email });
    return res.status(200).json("User Removed");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const allUsers = await User.find();
    console.log(allUsers);
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
