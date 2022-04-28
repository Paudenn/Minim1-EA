import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';

export interface User
{
    id: String;
    name: String;
    age: String;
    password: String;
    creationDate: Date;
}
const UserSchema = new Schema ({
    id: {type:String, required:true},
    name: {type: String, required:true},
    age: {type: String, required:true},
    password: {type: String, required:true},
    creationDate: {type: Date, default:Date.now}
})
export default model('User', UserSchema);
export const UserModel = mongoose.model("User", UserSchema);