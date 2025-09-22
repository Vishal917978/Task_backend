const express=require('express');
const router=express.Router();
const {registration,login}=require('../controller/authcontroller')

router.post('/registration',registration);
router.post('/login',login)

module.exports=router;