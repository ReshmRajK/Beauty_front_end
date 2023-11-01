const users=require('../model/userCollection')

//user
const userInquiry=async(req,res)=>{
    const {username,email,contact,services,msg}=req.body

    let inquiry={username,email,contact,services,msg}
   
    try{
      await users.create(inquiry).then((result,error)=>{
         if(result !=null && result !=""){
            res.status(200).json(result)
         }
         else{
            res.status(404).json("Error")
         }
      })
    }
     catch{
      res.status(400).json("connection error")

     } 
   
}
       
  



module.exports={userInquiry}
