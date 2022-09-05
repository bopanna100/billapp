const express=require("express");
const app=express();
 const port=4000;

 app.get("/",function(request,responce){
    responce.send("hello");
 });

 app.listen(port,()=>console.log(`app is started in ${port}`));