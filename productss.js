const mongoose=require('mongoose');
const mongSchema=new mongoose.Schema({
trans_id:Number,
name:String,
Address:String
});
module.exports=mongoose.model('products',mongSchema);
