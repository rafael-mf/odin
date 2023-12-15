require('dotenv').config({ path: require('find-config')('.env') })


let knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DATABASE
    },
    pool: { min: 0, max: 7 }
});

exports.knex = knex;