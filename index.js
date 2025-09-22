const express= require('express');
const app=express();
const bodyparser=require('body-parser');
const router = require('./route/auth');
const cors=require('cors');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
app.use('/',router);

app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','DELETE','PUT','PATCH'],
    Credentials:true
}))



app.listen(500,()=>{
    console.log("server started at");
})
