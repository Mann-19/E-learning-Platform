import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, 'Comment text is required'],
    },
    // This will be the Supabase User UUID (a string)
    author: {
      type: String,
      required: true,
    },
    // Link to the parent post
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
