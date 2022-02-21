const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../model/user.model");

const router = express.Router();

router.post(
  "",
  body("firstName").isLength({ min: 3, max: 30 }),
  body("age").isNumeric({ min: 1, max: 150 }),
  async (req, res) => {
    try {
      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);
router.get("", async (req, res) => {
  try {
    const user = await User.find().populate({path:"post_id",select:["likes","comment_id"]}).lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    res.status(500).send(err.message);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    res.status(500).send(err.message);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(user);
  } catch (e) {
    res.status(500).send(err.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(201).send(user);
  } catch (e) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
