const express = require("express");
const router = express.Router();
// const postController = require("../controller/post.controller");
/* GET all posts*/
router.get("/posts", function (req, res, next) {
  // postController.getTasks().then((data) => res.json(data));
});

router.get("/posts/:1d", function (req, res, next) {
  res.send("respond with a single post");
});

module.exports = router;
