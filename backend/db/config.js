const mongoose = require("mongoose");
try {
    mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    console.log("database has been connect");   
} catch (error) {
    console.log("some thing went wrong");
}