const postRepository = require("../repository/post.repository");
class PostService {
  constructor() {}

  async getPosts() {
    return postRepository.getPosts();
  }

  async createPost(post) {
    return postRepository.createPost(post);
  }

  async updatePost(post) {
    return postRepository.updatePost(post);
  }

  async deletePost(postId) {
    return postRepository.deletePost(postId);
  }
}
module.exports = new PostService();
