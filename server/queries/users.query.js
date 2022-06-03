//USER MODEL
import { USER } from "../models/user.model.js";

export const createdNewUser = async (user) => {
  
  const { firstname, lastname, email, password } = user;
  const hashedPassword = await USER.hashPassword(password);
  //PROMISE RETURN OF USER CREATION
  const newUser = new USER({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    favorites: [],
  });
  return newUser.save();
};

export const updateUser = async (userId, user) => {
  const { firstname, lastname, email, password } = user;

  //STATIC METHOD ON USER METHOD TO RECALCULATE THE CRYPTED PASSWORD
  const hashedPassword = await USER.hashPassword(password);

  //PROMISE RETURN OF USER UPDATE
  return USER.updateOne(
    { _id: userId },
    { $set: { firstname, lastname, email, password: hashedPassword } }
  ).exec();
};

export const findUserPerEmail = (email) => {
  return USER.findOne({ email }).exec();
};

export const findUserPerId = (id) => {
  return USER.findById(id).exec();
};
