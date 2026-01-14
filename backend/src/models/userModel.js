import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profilePicture: {
    type: String,
    default: ''
  },
  clerkId: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

export default User = mongoose.model('User', userSchema);