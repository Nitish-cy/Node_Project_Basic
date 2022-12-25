const express=require('express');
//const multer=require('multer');
// const app=express();
//this is working as a middle ware
// const upload=multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb){
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname+".jpg")
//         }
//     })
// }).single("file");
// app.post('/upload',upload,async(req,res)=>{
//     res.send("Uploaded");
// })
const app=express();
const dbConnect=require('./mongodb');
app.use(express.json());
if(dbConnect)
{
    console.log("Db is connected");
}
else{
    console.log("Db Not connected");
}
const authRout=require('./routs/auth_routes');
app.use('/auth',authRout);
app.get('/',(req,res)=>{
    res.send("Done");
})
app.listen(5000);