const { connect } = require("../config/db.config");
const { Post } = require("../model/post.model");
const logger = require("../logger/api.logger");

class PostRepository {
  constructor() {
    connect();
  }

  async getPosts() {
    const posts = Post.find({});
    return posts;
  }

  async createPost(post) {
    let data = {};
    try {
      data = Post.create(post);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return post;
  }

  async updatePost(post) {
    let data = {};
    try {
      data = Post.updateOne(post);
    } catch (err) {
      logger.error("Error::" + err);
    }
  }

  async deletePost(postId) {
    let data = {};
    try {
      data = Post.deleteOne({ _id: postId });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return { status: `${data.deleteCount > 0 ? true : false}` };
  }
}

module.exports = new PostRepository();
