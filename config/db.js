const mysql=require('mysql2');
let conn=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'root',
    database:'task',
},(res,err)=>{
    if(err){
        console.log("Error occurs")
    }else{
        console.log("Database connect successfully")
    }

});
module.exports=conn;
