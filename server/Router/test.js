const express = require('express');
const router = express.Router();
const dbConfig = require('../db-config.json')
const oracledb = require('oracledb');
oracledb.initOracleClient({ libDir: 'C:\\Program Files\\oracle\\instantclient_21_3' });

router.get('/api/get', (req, res)=>{
  console.log(req.query)
  
  // res.send({ result: "hi???"});
  // console.log(req)
  // console.log(res)

    async function run() {
      let connection;
      try {
        connection = await oracledb.getConnection(dbConfig);
        console.log(connection)
        let execution = "SELECT * FROM COFFEE WHERE USER_ID = "+"'admin'"+"AND COFFEE_DATE = "+req.query.thisDay+" ORDER BY SRNO ASC";
        console.log(execution)
        const result = await connection.execute(execution)
        console.log(result)
        res.send({result: result})
      } catch (err) {
        console.error(err);
      } 
  }
  run();
});

router.get('/api/getMonth', (req, res)=>{
  console.log(req.query)
  let yymm = req.query.thisDay.substr(0,6)
  // res.send({ result: "hi???"});
  // console.log(req)
  // console.log(res)
  console.log(yymm)
    async function run() {
      let connection;
      try {
        connection = await oracledb.getConnection(dbConfig);
        console.log(connection)
        let execution = "SELECT COFFEE_DATE, COUNT(*) CNT FROM COFFEE WHERE USER_ID = "+"'admin'"+"AND COFFEE_DATE LIKE '"+yymm+"%' GROUP BY COFFEE_DATE";
        console.log(execution)
        const result = await connection.execute(execution)
        console.log(result)
        res.send({result: result})
      } catch (err) {
        console.error(err);
      } 
  }
  run();
});

router.post('/api/post',(req, res)=> {
  res.send({ test: "edit coffee"});

  console.log(req.body)
  let thisDay = req.body.thisDay
  let type = req.body.type
  let brand = req.body.brand
  let options = req.body.options
  console.log(options)
    async function run() {
      let connection;
      try {
        //DB 접속
        connection = await oracledb.getConnection(dbConfig);
        console.log(connection)
        //일련번호 max 값 계산
        let execution1 = "SELECT CASE WHEN COUNT(*) = 0 THEN 0 ELSE MAX(NVL(SRNO,0)) END SRNO FROM COFFEE WHERE USER_ID = "+"'admin'"+"AND COFFEE_DATE = "+req.body.thisDay+"";
        console.log(execution1)
        const srno = await connection.execute(execution1)
        console.log(srno.rows[0])
        let num = Number(srno.rows[0]) + 1
        console.log(num)
        //max 일련번호로 삽입
        let execution2 = "INSERT INTO \"ADMIN\"\.\"COFFEE\"VALUES ('admin', '"+thisDay+"', "+num+", '"+type+"', '"+brand+"')";
        const result = await connection.execute(execution2)
        console.log(result)

        //option 생성
        options.map(async(e,i)=>{
          if (e==true){
            let execution3 = "INSERT INTO \"ADMIN\"\.\"COFFEE_OPTION\"VALUES ('admin', '"+thisDay+"', "+num+", "+(i+1)+",'')";
            console.log(execution3)
            const result2 = await connection.execute(execution3)
            console.log(result2)
          }
          connection.commit()
        })
        
      } catch (err) {
        console.error(err);
      } 
  }
  run();
});



router.post('/api/delete',(req, res)=> {

  console.log(req.body.params)
  let thisDay = req.query.thisDay
    async function run() {
      let connection;
      try {
        connection = await oracledb.getConnection(dbConfig);
        console.log(connection)
        console.log
        
        let execution2 = "DELETE FROM COFFEE WHERE USER_ID = 'admin' AND COFFEE_DATE = '"+req.body.params.thisDay+"' AND SRNO ="+req.body.params.srno;
        console.log(execution2)
        const result = await connection.execute(execution2)
        console.log(result)
        connection.commit()      
        res.send({result : "success"}) 
      } catch (err) {
        console.error(err);
        res.send({result:"fail"})
      }
  }
  run();
});


module.exports = router;