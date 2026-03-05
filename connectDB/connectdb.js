import mongoose from 'mongoose';
const connectDB = async () => {
    const connect=await mongoose.connect('mongodb://localhost:27017/crude_node');
    if(connect){
        console.log("database connected");        
    }
    else{
        console.log("database not connect");
    }

}
export default connectDB;