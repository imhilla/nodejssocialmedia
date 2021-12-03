// Inside schema/user.js
const mongoose = require("mongoose");

const postShema = new mongoose.Schema({
  title: "string",
  body: "string",
});

const Post = mongoose.model("posts", postShema);
module.exports = {
  Post,
};
