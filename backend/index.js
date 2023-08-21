const express = require("express");
const User = require("./db/User");
const app = express();
const cors = require('cors')
app.use(cors());
require("./db/config")
app.use(express.json());





app.get("/", (req, res) => {
    res.send(`server is running `)
})


app.post("/register", async (req, res) => {
    const user = new User(req.body.isLogin);
    const result = await user.save();
    res.send(result);
})

app.post("/login", async (req, res) => {
    console.log("Request**", req.body);
    // const {email, password} =  req.body.isLogin
    if (req.body.isLogin.password && req.body.isLogin.email) {
        console.log("req.body__",req.body);
        
        // let loggedInUser = await User.fineOne(req.body).select("-password");

        // console.log("loggedInUser",loggedInUser)
        // if (user) {
        //     console.log("its user",user)
        //     res.send(user)
        // } else {
        //     res.send({ result: "No User Found" })
        // }
    } else {
        res.send({ result: "No User Found" })
    }
    // const user = new User(req.body.isLogin);
    // const result = await user.save();
    // res.send(result);
    // console.log("result",result)
})

app.listen(5000, () => {
    console.log(`server is running at ${5000}`)
})
