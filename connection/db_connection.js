const mongoose=require('mongoose')
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true

}).then(()=>{
    console.log('MongoDB is connected');
}).catch(()=>{
    console.log('MongoDB is not connected');
})