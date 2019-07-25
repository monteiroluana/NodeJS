const { Pool, Client } = require('pg');
const connectionString = 'postgresql://db_poc_tereos_adm:Pascal2018@localhost:5432/pg_dev_tereos';

const pool = new Pool({
    connectionString: connectionString,
});

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// });

pool.query('SELECT NOW() as pool')
.then(res => console.log(res.rows[0]))
    pool.end();


const client = new Client({
    connectionString:connectionString
});

client.connect();


client
  .query('SELECT NOW() as client')
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))

