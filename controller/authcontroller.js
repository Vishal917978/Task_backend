const mysql=require('../config/db');
const util=require('util');
const jwt=require('jsonwebtoken');
const query1=util.promisify(mysql.query).bind(mysql);

const registration=async(req,res)=>{
const {username,email,password}=req.body
const selectquery=`select * from user where email='${email}'`
const record=await query1(selectquery);
if(record.length>0){
    res.send({message:"user already registered",data:data})
}
const insertquery=`insert into user(username,email,password)values(?,?,?)`
let values=[username,email,password]
const record1=await query1(insertquery,values)
res.send({message:"User register successfully",data:record1})
}

module.exports=registration;