import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  twitter: {
    type: String,
  },
  instagram:{
    type: String
  },
  discord: {
    type: String
  },
  facebook: {
    type: String
  },
  website: {
    type: String
  },
  avatar: {
    type: String
  },
  banner: {
    type: String
  },
  wallet: {
    type: String
  }
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
