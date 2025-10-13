const mysql=require('mysql2');
let conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'yourpassword',
    database:'task',
},(res,err)=>{
    if(err){
        console.log("Error occurs")
    }else{
        console.log("Database connect successfully")
    }

});
module.exports=conn;
