import Post from '../models/Post.js';
import Community from '../models/Community.js';

// Create a new post
export const createPost = async (req, res) => {
  const { title, content, communityId } = req.body;
  const author = req.user.id; // From authMiddleware

  try {
    // 1. Find the community this post belongs to
    const community = await Community.findById(communityId);
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }

    // 2. Create the new post
    const post = await Post.create({
      title,
      content,
      author,
      community: communityId,
    });

    // 3. Add the new post's ID to the community's 'posts' array
    community.posts.push(post._id);
    await community.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get a single post by ID, populated with its comments
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate({
        path: 'comments',
        select: 'text author createdAt', // Only get these fields
      })
      .populate({
        path: 'community',
        select: 'name' // Also send back the community's name
      });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
