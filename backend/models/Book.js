import { Schema, model } from "mongoose";

const bookSchema = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	genre: { type: String, required: true },
	language: { type: String, required: true },
	rating: { type: Number, default: 0 },
	description: { type: String, required: true },
	buyLink: { type: String },
});

export default model("Book", bookSchema);
