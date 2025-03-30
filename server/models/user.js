//sequelize models for different tables in PostgreSQL (This one is for the entity: User)
/* const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("instructor", "student"),
        allowNull: false
    },
    verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    level_of_study: {
        type: DataTypes.STRING,
        allowNull: true
    },
    organization: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: true
});

module.exports = User;
 */