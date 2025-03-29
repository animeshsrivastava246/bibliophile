const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	favoriteBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("User", userSchema);
