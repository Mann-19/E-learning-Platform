import Comment from '../models/Comment.js';
import Post from '../models/Post.js';

// Create a new comment
export const createComment = async (req, res) => {
  const { text, postId } = req.body;
  const author = req.user.id; // From authMiddleware

  try {
    // 1. Find the post this comment belongs to
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // 2. Create the new comment
    const comment = await Comment.create({
      text,
      author,
      post: postId,
    });

    // 3. Add the new comment's ID to the post's 'comments' array
    post.comments.push(comment._id);
    await post.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
