const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false, // Disable SQL logs in the console
});

sequelize.authenticate()
    .then(() => console.log("✅ PostgreSQL Database connected successfully!"))
    .catch(err => console.log("❌ Error: " + err));

module.exports = sequelize;
