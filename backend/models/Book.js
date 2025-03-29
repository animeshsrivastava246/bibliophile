const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	genre: { type: String, required: true },
	language: { type: String, required: true },
	rating: { type: Number, default: 0 },
	description: { type: String },
	buyLink: { type: String },
});

module.exports = mongoose.model("Book", bookSchema);
