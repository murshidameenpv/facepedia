import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, `First name is required`],
      match: [
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
      ],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, `Last name is required`],
      match: [
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
      ],
    },
    location: {
      type: String,
      default: "",
    },
    occupation: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: [true, `Email already Exists`],
      required: [true, `Email is required!`],
    },
    password: {
      type: String,
      required: [true, `Password is required`],
    },
    profileImage: {
      type: String,
      default: "",
    },
    profileViews: {
      type: Number,
      min: 0,
      default: 0,
    },
    profileImpressions: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  { timestamps: true }
);
const userDb = mongoose.models.User || mongoose.model("User", userSchema);
export default userDb;
