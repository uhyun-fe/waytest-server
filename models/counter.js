const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema({
   _id: Number,
   visit: Number,
});

module.exports = mongoose.model("counter", counterSchema);
