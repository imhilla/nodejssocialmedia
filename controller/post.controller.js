const postService = require("../service/post.service");
const logger = require("../logger/api.logger");

class PostController {
  async getPosts() {
    logger.info("Controller: getPosts");
    return await postService.getPosts();
  }

  async createPost(post) {
    logger.info("Contorller: create post", post);
    return await postService.createPost(post);
  }

  async updatePost(post) {
    logger.info("controller: update post", post);
    return await postService.updatePost(post);
  }

  async deletePost(postId) {
    logger.info("Controller: delete post", postId);
    return await postService.deletePost(postId);
  }
}
module.exports = new PostController();
