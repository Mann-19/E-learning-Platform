import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import communityRoutes from './routes/community_routes';
import postRoutes from './routes/post_routes';
import commentRoutes from './routes/comment_routes';
import connectDB from './config/db';

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// API routes

app.get("/", (req, res) => {
    res.send("Gradia community server is running");
});

app.use('/api/communities', communityRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// listen to requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Community server running on http://localhost:${PORT}`);
});