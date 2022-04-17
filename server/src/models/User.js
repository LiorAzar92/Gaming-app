import Sequelize from 'sequelize';
import db from '../db/database.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
// import validator from 'validator';


const User = db.define('User', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
},
    {
        freezeTableName: true,
    },

);

//hashing password
User.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, await bcrypt.genSalt(10));
    user.password = hashedPassword;
})

await User.sync({ alter: true });

export default User;