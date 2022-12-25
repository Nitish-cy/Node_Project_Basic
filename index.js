// //create buch of files in folder using fs
// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'files');
// // for(i=0;i<5;i++)
// // {
// //   fs.writeFileSync(dirpath+"/hello"+i+".txt","A Samople file");
// //   //or
// //   //fs.writeFileSync(`hello ${i}.txt`);
// // }
// fs.readdir(dirpath,(err,files)=>
// {
//   //console.warn(files);
//   files.forEach(element => {
//     console.log(element);
//   });
// })
// //   const http=require('http');
// //   const data=require('./data');
// // const { json } = require('stream/consumers');

// //   http.createServer((req,res)=>{
// //     // res.write("Hellop World");
// //     // res.end();
// //     res.writeHead(200,{'Content-Type':'application\json'});
// //     // res.write(JSON.stringify({name:'Nitish Mishra',email:'mishra@gmail.com'}));
// //     //we can take data from another page 
// //     res.write(JSON.stringify(data));
// //     res.end();
// //   }).listen(5000);
  
// // //  function data(req,res){
// // //     res.write("Hellop World Nitish Mishra");
// // //     res.end();
// // //  }
// // //  http.createServer(data).listen(4500);

//=================================CRUD=======================

// const fs=require('fs');
// const path=require('path');
// const dirpath=path.join(__dirname,'crud');
// const filePath=`${dirpath}/apple.txt`;

// fs.writeFileSync(filePath,'This is a simple text file');
// fs.readFile(filePath,'utf8',(err,item)=>{
//   console.log(item);
  //it will read file <Buffer 54 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65 20 74 65 78 74 20 66 69 6c 65>
  //if we want to read in same formate then we have to use utf8
    //update the file 
    // fs.appendFile(filePath,'Hii nitish this is new text which is added into',(err)=>
    // {
    //   if(!err)
    //   {
    //     console.log("file is updated");
    //   }
    // })
    //Rename the file
    // fs.rename(filePath,`${dirpath}/fruit.txt`,(err)=>{
    //   if(!err)
    //   {
    //     console.log("File is Updated");
    //   }
    // })

    //delete the file 

    // fs.unlinkSync(`${dirpath}/fruit.txt`)
    //======================Asyncronous Example===========
    // console.log("hi mishra ji");
    // setTimeout(()=>{
    //   console.log("Hii Nitish");
    // },2000)
    // console.log("hii shubham");
    // //outpit hi mishra ji
              // hii shubham
              // Hii Nitish
              //=======Drowback of Asyncronous programming=======
      // let a=10;
      // let b=0;
      // setTimeout(()=>{
      //   b=20;
      // })
      // console.log(a+b);
      //it will print 10 we can handle it using premises
// });
// Express Js
// ================
//these get post methods always give us routing
// const Express=require('express');
// const app=Express();
// app.get('',((req,res)=>
// {
//   res.send('Hello This is home page');
// }))
// app.get('/about',((req,res)=>
// {
//   res.send('Hello This is About us page');
// }))
// app.listen(5000);
//Mongo==================
//const dbConnect=require('/mongodb');
// const main=async()=>{
//   let data=await dbConnect();
//   data=await collectrion.find({}).toArray();
//  console.log(data);
// }

//===================== Using Mongoose
const express=require('express');
require('./mongodb');
const product=require('./productss');
const app=express();
app.use(express.json());
app.post('/create',async(req,res)=>{
  let data=new product(req.body);
  let ress=await data.save();
  console.log(ress);
   res.send(ress);
});
app.get('/list',async(req,res)=>{
let data=await product.find();
res.send(data);
});
app.delete("/delete/:_id",async(req,res)=>{
let data=await product.deleteOne(req.param);
res.send(data);
});
app.put("/update/:_id",async(req,res)=>{
  let data=await product.updateOne(
    req.params,
    {$set:req.body}
  );
  res.send(data);
  });
  app.get("/search/:key",async(req,res)=>{
    let data=await product.find(
      {
        "$or":
        [
          {"name":{$regex:req.params.key}}
        ]
      }
    )
    res.send(data);
    });
app.listen(5000);