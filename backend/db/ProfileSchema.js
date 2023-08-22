const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    name: String,
    email: String,
    password : String,
})

module.exports = mongoose.model("users",profileSchema)