const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["admin", "user"], default: "user" },
  articles: [{ type: Schema.Types.ObjectId, ref: "Article" }]
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
