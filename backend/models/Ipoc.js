const mongoose = require("mongoose")

const IpocSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const IpocModel = mongoose.model("ipoc", IpocSchema)
module.exports = IpocModel