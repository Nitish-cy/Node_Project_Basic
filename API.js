// //const { application } = require('express');
// const express=require('express');
// const dbConnect=require('./mongodb');
// const app=express();
// //this line is used when we have to use POST method just for getting data from 
// //and only in JSON format
// app.use(express.json());
// //'/' this is used for root URL
// app.get('/',async(req,res)=>{
//     let data=await dbConnect();
//     data=await data.find().toArray();
//     //console.log(data);
//     res.send(data);
// });
// app.post('/',async(req,res)=>{
//     //dbConnction always returns promises so we have to use async and await
//     let data=await dbConnect();
//     let ret =await data.insert(req.body);
//     //console.log(req.body);//used for getting data from postman or user
//     res.send(ret);
// });
// app.put('/',async(req,res)=>{
//     let data=await dbConnect();
//     let result=data.updateOne(
//         {trans_id:"mish"},//this one is for conditiion
//         //{trans_id:req.body.trans_id} for dynamic condition
//         {$set:req.body}//which data i want to update
//         )
//     console.log(req.body);
// });
// app.delete('/:trans_id',async(req,res)=>{
//     const data=await dbConnect();
//     let rt =await data.deleteOne({trans_id:req.params.trans_id});
//     //console.log(req.params.trans_id); printed data from url which is passed post Man
// })
// app.listen(5000);

//========================
//     MONGOOSE connection using mongoose
const { default: mongoose } = require('mongoose');
const mong=require('mongoose');
 mongoose.connect("mongodb://localhost:27017/E_Com");
    const productSchema=new mongoose.Schema({
        name:String,
        Address:String
    });
const saveInDb=async()=>{
    const productModel=new mongoose.model('products',productSchema);
    let data=new productModel({name:'mmn'});
    let res=await data.save();
    console.log(res);
}
const updateInDb=async()=>{
    const productModel=new mongoose.model('products',productSchema);
    let data=await productModel.updateOne(
        {name:'Shubham'},
        {$set:{Address:'Ramgarh'}}
    )
    console.log(data);
}
//updateInDb();
const deleteInDb=async()=>{
    const product=new mongoose.model('products',productSchema);   
    let data=await productModel.deleteOne(
        {name:'Shubham'}
    )
    console.log(data);
}
//deleteInDb();
const findInDb=async()=>{
    const productModel=new mongoose.model('products',productSchema);   
    let data=await productModel.find();
    console.log(data);
}
findInDb();