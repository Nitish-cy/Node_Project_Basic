// const {MongoClient}=require('mongodb');
// const url='mongodb://localhost:27017';
// const client=new MongoClient(url);
// async function dbConnect()
// {
//   let result=await client.connect();
//   let db=result.db('E_Com');
//   return db.collection('products');
//   // let arr=await collectrion.find({}).toArray();
//   // console.log(arr);
// }
// module.exports=dbConnect;
//Conncection in seperate file usimg mongoose
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");
