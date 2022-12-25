const mongoose=require('mongoose');
const mongSchema=new mongoose.Schema({
    displayName:{type:String},
    email:{type:String, uinque:true},
    password:{type:String, required:true},
    createdat:{type:Number,default:Date.now().valueOf()},
    modifiedAt:{type:Number,default:Date.now().valueOf()}
});
module.exports=mongoose.model('user',mongSchema);