const postRepository = require("../repository/post.repository");
class PostService {
  constructor() {}

  async getPosts() {
    return await postRepository.getPosts();
  }

  async createPost(post) {
    return await postRepository.createPost(post);
  }

  async updatePost(post) {
    return await postRepository.updatePost(post);
  }

  async deletePost(postId) {
    return await postRepository.deletePost(postId);
  }
}
module.exports = new PostService();
