require('dotenv').config();
module.exports = {
    development: {
        username: process.env.DEVDBID,
        password: process.env.DEVDBPW,
        database: process.env.DEVDATABASE,
        host: process.env.DEVHOST,
        dialect: 'mysql',
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: process.env.PRODDBID,
        password: process.env.PRODDBPW,
        database: process.env.PRODDATABASE,
        host: process.env.PRODUCHOST,
        dialect: 'mysql',
    },
};
