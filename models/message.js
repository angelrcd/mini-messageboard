import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  added: { type: Date, required: true, default: Date.now }
})

export default mongoose.model("Message", MessageSchema);