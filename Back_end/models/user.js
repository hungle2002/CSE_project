const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "UserSchema: Username must be unique!"],
    required: [true, "UserSchema: Username required!"]
  },
  password: {
    type: String,
    required: [true, "UserSchema: Password required!"]
  }
});

module.exports = mongoose.model("User", userSchema);
