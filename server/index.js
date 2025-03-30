/* const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/database");
const userRoutes = require("./routes/user_routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", user_routes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, async () => {
    try {
        await sequelize.sync();
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error("Error syncing database:", error);
    }
});
 */

//connecting routes
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/database");

const userRoutes = require("./routes/user_routes");
const courseRoutes = require("./routes/course_routes");
const moduleRoutes = require("./routes/module_routes");
const progressRoutes = require("./routes/progress_routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/progress", progressRoutes);

app.listen(PORT, async () => {
    await sequelize.sync();
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
