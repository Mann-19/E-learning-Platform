import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Post title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Post content is required'],
    },
    // This will be the Supabase User UUID (a string)
    author: {
      type: String,
      required: true,
    },
    // Link to the parent community
    community: {
      type: Schema.Types.ObjectId,
      ref: 'Community',
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);
export default Post;
