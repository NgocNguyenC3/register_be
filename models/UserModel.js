import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, },
    password: { type: String },

}, { collection: "users" })

const UserModel = mongoose.model('UserSchema', userSchema)

export default UserModel;