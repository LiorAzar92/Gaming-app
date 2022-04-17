import Sequelize from 'sequelize';
import db from '../db/database.js';

const Score = db.define('Score', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    }

})

await Score.sync({ alter: true });

export default Score;