const { Pool } = require('pg');

console.log('running db.js')
const PG_URI = 'postgres://qjetopoz:8GvTA9CrNgNT4n6udDiBMDTAK5irqgQ0@chunee.db.elephantsql.com/qjetopoz'
const pool = new Pool({
    connectionString: PG_URI
})

pool.connect((err) => {
    if (err) console.error('could not connect to postgreSQL', err)
    else console.log('connected')
    return;
})

const db =  {
    query: (string, params, callback) => {
        return pool.query(text, params, callback);
    },
};

module.exports = db;