import Sequelize from 'sequelize';

const db = new Sequelize('gaming_app', 'postgres', '6717789d', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000
    }
});

export default db;