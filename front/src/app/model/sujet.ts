import { Message } from "./message";

export class Sujet {
    _id: string;
    title: string;
    likes: number;
    message: Message[];
    createdAt: Date;
    updatedAt: Date;

    constructor(_id: string, title: string, likes: number, message: Message[], createdAt: Date, updatedAt: Date){
        this._id = _id;
        this.title = title;
        this.likes = likes;
        this.message = message;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}