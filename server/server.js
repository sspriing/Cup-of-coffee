const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const dbConfig = require('./db-config.json')

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

oracledb.initOracleClient({ libDir: 'C:\\Program Files\\oracle\\instantclient_21_3' });

async function run() {

  let connection;

  try {

    connection = await oracledb.getConnection(dbConfig);
    console.log(connection)

  } catch (err) {
    console.error(err);
  } 
}

run();