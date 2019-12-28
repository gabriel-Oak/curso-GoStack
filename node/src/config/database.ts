require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

// ElefantSQL
const connectOption = {
    dialect: 'postgres',
    host: 'raja.db.elephantsql.com',
    username: 'uwwvjsou',
    password: 'SL85cCPXUbIxgXdPy6pSKzkfbjPOsx_F',
    database: 'uwwvjsou',
    storage: './tests/database.sqlite',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}

module.exports = connectOption;
