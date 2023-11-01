const express=require('express')
const {userInquiry}=require('../controlles/logic')

const router=express.Router()


router.post('/express/user/add-inquiry',userInquiry)

module.exports=router