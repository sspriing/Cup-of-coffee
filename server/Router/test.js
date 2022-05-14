const express = require('express');
const router = express.Router();
const dbConfig = require('../db-config.json')
const oracledb = require('oracledb');
oracledb.initOracleClient({ libDir: 'C:\\Program Files\\oracle\\instantclient_21_3' });

router.get('/api/get', (req, res)=>{
  res.send({ test: "hi"});
});

router.post('/api/post',(req, res)=> {
  res.send({ test: "hello"});

  console.log(req.body)
  
    async function run() {
      let connection;
      try {
        connection = await oracledb.getConnection(dbConfig);
        console.log(connection)

        const result = await connection.execute("INSERT INTO \"ADMIN\"\.\"COFFEE\"VALUES ('admin', '20220514', '2', 'latte', 'starbucks')")
        console.log(result)
        const result2 = await connection.execute("COMMIT")
        console.log(result2)
      } catch (err) {
        console.error(err);
      } 
  }
  run();


});


module.exports = router;