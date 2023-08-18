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
    console.log("result", result)
})

app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.fineOne(req.body).select("-password");
        if (user) {
            res.send(user)
        } else {
            res.send({ result: "No User Found" })
        }
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
