import Student from "../modules/studentschema.js"; 
const readcontroller=async(req,res)=>{
    try{
        const data =await Student.find({});
        if(data){
        res.render('read',{'data':data})
        }
        else{
            res.render('read');
        }
        res.render('read.ejs');
    }
    catch(err) {
        console.log("error in read controller", err);
}
}
export default readcontroller;