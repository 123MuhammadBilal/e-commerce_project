const express = require("express");
require("./db/config")
const User = require("./db/User");
const app = express();
app.use(express.json());
app.get("/" , (req,res)=>{
    res.send(`server is running `)
})

app.post("/register", async (req,res)=>{
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
    console.log("result",result)
})

app.listen(5000,()=>{
    console.log(`server is running at ${5000}`)
})
