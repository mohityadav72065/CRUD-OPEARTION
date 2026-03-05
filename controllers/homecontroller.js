import Student from "../modules/studentschema.js";
const homecontroller= (req,res)=>{

    res.render("index")
}
const createController=async (req,res)=>{
    // console.log(req.body);
    // res.render('index');
 const record= await Student({
        name:req.body.name,
        city:req.body.city,
        email:req.body.Email,
        phone:req.body.Phone
    });
    if(record){
        await record.save();
        console.log("data saved");
        res.redirect('/');
        
    }
    else{
        console.log("data not saved");
    }
}

export { homecontroller ,createController};