import mongoose from 'mongoose';
const connectDB = async () => {
    const connect=await mongoose.connect('mongodb+srv://mohit:5VmNFT8NQIBCpK50@project.lppfwqu.mongodb.net/database');
    if(connect){
        console.log("database connected");        
    }
    else{
        console.log("database not connect");
    }

}
export default connectDB;
