const mongoose = require("mongoose")

const CompanySchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const CompanyModel = mongoose.model("company", CompanySchema)
module.exports = CompanyModel