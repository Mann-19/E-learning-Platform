import Community from '../models/Community.js';

// Create a new community
export const createCommunity = async (req, res) => {
  const { name, description } = req.body;
  
  // req.user.id is attached by the authMiddleware
  const creator = req.user.id; 

  try {
    const communityExists = await Community.findOne({ name });
    if (communityExists) {
      return res.status(400).json({ message: 'Community name already exists' });
    }

    const community = await Community.create({
      name,
      description,
      creator,
    });

    res.status(201).json(community);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get all communities
export const getAllCommunities = async (req, res) => {
  try {
    // Find all communities, but only select name, description, and creator
    const communities = await Community.find({}).select('name description creator');
    res.status(200).json(communities);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get a single community by ID, populated with its posts
export const getCommunityById = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id)
      .populate({
        path: 'posts',
        select: 'title author createdAt', // Only get these fields from posts
      });

    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }

    res.status(200).json(community);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
