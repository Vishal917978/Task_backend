const express=require('express');
const router=express.Router();
const registration=require('../controller/authcontroller')

router.post('/registration',registration);

module.exports=router;