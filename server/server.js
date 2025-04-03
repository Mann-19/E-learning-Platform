import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Route imports
import userRoutes from "./routes/user_routes.js";
// import courseRoutes from "./routes/course_routes.js";
// import moduleRoutes from "./routes/module_routes.js";
// import progressRoutes from "./routes/progress_routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
// app.use("/api/courses", courseRoutes);
// app.use("/api/modules", moduleRoutes);
// app.use("/api/progress", progressRoutes);

app.listen(PORT, async () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
