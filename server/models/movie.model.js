import mongoose from "mongoose";
const { Schema } = mongoose;

const MOVIE_MODEL = new Schema(
  {
    adult: Boolean,
    backdrop_path: String,
    genre_ids: Array,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    release_date: Date,
    title: String,
    vote_average: Number,
    vote_count: Number,
  },
  { timestamps: true }
);

export const MOVIE = mongoose.model("movies", MOVIE_MODEL);
