import mongoose from "mongoose";
const { Schema } = mongoose;

const COMMENT_MODEL = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    movieId: { type: Schema.Types.ObjectId, ref: "movies" },
    text: String,
    isDeleted: Boolean,
  },
  { timestamps: true }
);

export const COMMENT = mongoose.model("comments", COMMENT_MODEL);
