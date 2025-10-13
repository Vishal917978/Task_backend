const { error } = require('console')
const mysql=require('../config/db')
const util=require('util')
const query1=util.promisify(mysql.query).bind(mysql)

const createTask=async(req,res)=>{
    const {title,description,status,priority,created_by,assigned_to,project_id,due_date}=req.body
    let qry=`select * from tasks where title=? and project_id=?`;
    let result=await query1(qry,[title,project_id])
    if(result.length>0){
       return res.send({message:"task with this project_id already exists",error:true})
    }
    let insertQry=`insert into tasks(title,description,status,priority,created_by,assigned_to,project_id,due_date) values(?,?,?,?,?,?,?,?)`
    let val=[title,description,status,priority,created_by,assigned_to,project_id,due_date]
    let data1=await query1(insertQry,val)
    res.send({message:"task creation done ",error:false,data:data1})
}
module.exports={createTask}