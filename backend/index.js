const express = require("express");
const app = express();
const profile = require("./db/ProfileSchema")
const cors = require('cors');
const ProfileSchema = require("./db/ProfileSchema");
app.use(cors());
require("./db/config")
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`server is running${name} `)
})


app.post("/register", async (req, res) => {
    const user = new ProfileSchema(req.body.isLogin);
    const result = await user.save();
    res.send(result);
})

app.post("/login", async (req, res) => {
    const {name , email, password } =  req.body.isLogin;
    if (email && password) {
        const request =  {
            email: email,
            password: password,
        };
        const profile = await ProfileSchema.find(request);
        if(profile === ""){
            res.send({ result: "No User Found" })
            console.log("user not found");
        }else{
            res.send(profile);
            console.log(profile);
        }
    } else {
        res.send({ result: "No User Found" })
    }
})

app.listen(5000, () => {
    console.log(`server is running at ${5000}`)
})
