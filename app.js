const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const postContoller = require("./controller/post.controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/api/posts", (req, res) => {
  postContoller.getPosts().then((data) => res.json(data));
});

app.post("/api/post", (req, res) => {
  postContoller.createPost(req.body).then((data) => res.json(data));
});

app.put("/api/post", (req, res) => {
  postContoller.updatePost(req.body).then((data) => res.json(data));
});

app.delete("/api/post/:id", (req, res) => {
  postContoller.deletePost(req.params.id).then((data) => res.json(data));
});

app.get("/", (req, res) => {
  res.send(`<h1>API Works !!!</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
module.exports = app