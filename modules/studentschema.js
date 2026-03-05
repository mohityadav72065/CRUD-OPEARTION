import mongoose from 'mongoose';
const studentSchema=new mongoose.Schema({
    'name':{
        type:String, 
        required:true
    },
    'city':{
        type:String,
        required:true
    },
    'email':{
        type:String,
        required:true
    },
   'phone':{
        type:Number,
        required:true
    },

    });
    
const Student=new mongoose.model('crud',studentSchema);
export default Student;