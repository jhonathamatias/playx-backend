const dotenv = require('dotenv');

const result = dotenv.config();

if ( result.error ) {
    throw result.error;
}

module.exports = {
    host: process.env.HOST,
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
    dbname: process.env.DB_NAME,
    dbport: process.env.DB_PORT,
    secretToken: process.env.SECRET_TOKEN,
};