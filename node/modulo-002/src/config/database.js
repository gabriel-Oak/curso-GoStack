require('dotenv').config({
    path: process.env.NODE_ENV.indexOf('test') !== -1 ? '.env.test' : '.env'
});

// ElefantSQL
const connectOption = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    storage: './tests/database.sqlite',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}

module.exports = connectOption;
