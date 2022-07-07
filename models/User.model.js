const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Username is required.'],
  },
  playerName: {
    type: String,
    required: [true, 'Your name is required.'],
  },

  userEmail: {
    type: String,
    required: [true, 'Email is required.'],
    // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    unique: true,
    required: [true, 'Password is required.']
  }
},
  {
    timestamps: true
  }
)

const User = model("User", userSchema);

module.exports = User;
