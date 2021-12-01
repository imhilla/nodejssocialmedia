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

  async updatePost(post) {
    let data = {};
    try {
      data = await Post.updateOne(post);
    } catch (err) {
      logger.error("Error::" + err);
    }
  }

  async deletePost(postId) {
    let data = {};
    try {
      data = await Post.deleteOne({ _id: postId });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return { status: `${data.deleteCount > 0 ? true : false}` };
  }
}

module.exports = new PostRepository();
