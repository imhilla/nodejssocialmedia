const { connect, disconnect } = require("../config/db.config");
const { Post } = require("../model/post.model");
const logger = require("../logger/api.logger");

class PostRepository {
  constructor() {
    connect();
  }

  async getPosts() {
    const posts = await Post.find({});
    return posts;
  }

  async createPost(post) {
    let data = {};
    try {
      data = await Post.create(post);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return post;
  }
}
