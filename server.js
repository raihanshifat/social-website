const express=require("express");
const express_app=express();
const server=require("http").Server(express_app);
const next=require("next")
const dev=process.env.NODE_ENV!='production'
const next_app=next({dev})
const PORT=process.env.PORT||3000;
const handle=next_app.getRequestHandler();
require("dotenv").config({ path: "./config.env" });
const connectDb = require("./utilsServer/connectDB.js");
connectDb();
express_app.use(express.json());

next_app.prepare().then(()=>
{
    express_app.use("/api/signup", require("./api/signup"));
    express_app.use("/api/auth", require("./api/auth"));
    express_app.all("*",(req,res)=>
    handle(req,res));
    server.listen(PORT,(err)=>{
        if(err) throw err;
        console.log("server is running");
    })
})

