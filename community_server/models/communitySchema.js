import mongoose from 'mongoose';
const { Schema } = mongoose;

const communitySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Community name is required'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Community description is required'],
      trim: true,
    },
    // This will be the Supabase User UUID (a string)
    creator: {
      type: String,
      required: true,
    },
    // We'll link all the posts that belong to this community
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Community = mongoose.model('Community', communitySchema);
export default Community;
