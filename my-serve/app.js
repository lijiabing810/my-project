const express=require("express");
const app=express();
const port=process.env.PORT||3000
console.log("111");
app.listen(port,()=>{
    console.log(port);
})