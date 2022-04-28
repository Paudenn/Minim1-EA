import {User} from "./user";

export interface Report {
    _id?: string;
    user: User;
    title: string;
    description: string;
    typeReport: string;
    creationDate: Date;
    solved: number; // 1 resuelto 0 pendiente

}