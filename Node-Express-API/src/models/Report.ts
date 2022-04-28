import mongoose from "mongoose";
import {Schema, model} from 'mongoose';
import {User} from "./User";

export interface Report {
    user: User;
    title: string;
    description: string;
    typeReport: string;
    creationDate: Date;
    solved: Number; // 1 resuelto 0 pendiente

}
const ReportSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    title: {type: String, required:true},
    description: {type: String, required:true},
    typeReport: {type: String, required:true},
    creationDate: {type: Date, default:Date.now},
    solved: {type: Number}
})

export const ReportModel = mongoose.model("Report", ReportSchema);
export default model('Report', ReportSchema);
