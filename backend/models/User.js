import { Schema, model } from "mongoose";

const userSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	favoriteBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

export default model("User", userSchema);
