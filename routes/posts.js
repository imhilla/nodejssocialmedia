const express = require("express");
const router = express.Router();

/* GET all posts*/
router.get("/posts", function (req, res, next) {
  res.send("respond with a all posts");
});

router.get("/posts/:1d", function (req, res, next) {
  res.send("respond with a single post");
});

module.exports = router;
