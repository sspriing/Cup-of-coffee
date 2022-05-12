const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (res, req) => {
  req.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('*', (res, req) => {
  req.sendFile(path.join(__dirname, '../dist/index.html'));
});

http.listen(8080, () => {
  console.log("Listening on 8080");
});


const oracledb = require('oracledb');

oracledb.initOracleClient({ libDir: 'C:\\ProgramFiles\\oracle\\instantclient_21_3' });

async function run() {

  let connection;

  try {

    connection = await oracledb.getConnection({ user: "admin", password: "n*H95TD5W_Awat#", connectionString: "XXX_high" });

    // Create a table

    // await connection.execute(`begin
    //                             execute immediate 'drop table nodetab';
    //                             exception when others then if sqlcode <> -942 then raise; end if;
    //                           end;`);

    // await connection.execute(`create table nodetab (id number, data varchar2(20))`);

    // Insert some rows
console.log(connection)
    // const sql = `INSERT INTO nodetab VALUES (:1, :2)`;

    // const binds =
    //   [ [1, "First" ],
    //     [2, "Second" ],
    //     [3, "Third" ],
    //     [4, "Fourth" ],
    //     [5, "Fifth" ],
    //     [6, "Sixth" ],
    //     [7, "Seventh" ] ];

    // await connection.executeMany(sql, binds);

    // connection.commit();     // uncomment to make data persistent

    // Now query the rows back

    // const result = await connection.execute(`SELECT * FROM nodetab`);

    // console.dir(result.rows, { depth: null });

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();