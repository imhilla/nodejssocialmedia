const postService = require("../service/post.service");
const logger = require("../logger/api.logger");

class PostController {
  async getPosts() {
    logger.info("Controller: getPosts");
    return postService.getPosts();
  }

  async createPost(post) {
    logger.info("Contorller: create post", post);
    return postService.createPost(post);
  }

  async updatePost(post) {
    logger.info("controller: update post", post);
    return postService.updatePost(post);
  }

  async deletePost(postId) {
    logger.info("Controller: delete post", postId);
    return postService.deletePost(postId);
  }
}
module.exports = new PostController();
