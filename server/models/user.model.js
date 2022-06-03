//MONGOOSE IMPORT
import mongoose from "mongoose";
const { Schema } = mongoose;
//BCRYPT IMPORT
import bcrypt from "bcrypt";
const { hash, compare } = bcrypt;

const USER_MODEL = new Schema(
  {
    firstname: {type:String, required:true},
    lastname: String,
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    favorites: [{ type: Schema.Types.ObjectId , ref: "MOVIE" }],
  },
  { timestamps: true }
);

USER_MODEL.statics.hashPassword = (password) => {
  return hash(password, 10);
};

USER_MODEL.methods.comparePassword = function (password) {
  return compare(password, this.password);
};

export const USER = mongoose.model("users", USER_MODEL);
