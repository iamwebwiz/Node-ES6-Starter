import { Schema, model } from "mongoose";

const UserSchema = Schema({
  firstName: { type: String, required: true, trim: true },
  middleName: { type: String, required: false, trim: true },
  lastName: { type: String, required: false, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now() },
});

export default model("User", UserSchema);
