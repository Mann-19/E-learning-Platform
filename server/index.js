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