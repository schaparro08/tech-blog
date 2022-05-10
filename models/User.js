const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/config");

class User extends Model {
    // set up a method to run on instance data (per user) to check passwords
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

User.init(
    { 
        // Finish the user model
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,

        },
    },
    {
    hooks: {
        // set up beforeCreate lifecycle "hook"
        beforeCreate: async (newData) => {
            newData.password = await bcrypt.hash(newData.password,10);
            return newData
        },
        beforeUpdate: async (updatedData) => {
            updatedData.password = await bcrypt.hash(updatedData.password, 10);
            return updatedData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "User"
    }
);

module.exports = User;