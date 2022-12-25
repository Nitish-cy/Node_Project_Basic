const rout=require('express').Router();
const user = require('../models/user');
const User=require('../models/user');
rout.post('/register',(req,res)=>
{
    const use=new user({
        displayName:req.body.displayName,
        email:req.body.email,
        password:req.body.password,
    })
})

rout.post('/login',(req,res)=>
{
    res.json("Login Work");
})

module.exports=rout;