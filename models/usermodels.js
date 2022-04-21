const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    role:[{type:mongoose.Schema.Types.ObjectId,ref:'role'}],
    password:{type:String,require:true},
    phone:{type:String},
    cin:{type:Number, required:true},
    active: {type:Boolean, default:true},
    createdAt:{type:Date,default:new Date()}
})
module.exports = mongoose.model('user',userSchema);