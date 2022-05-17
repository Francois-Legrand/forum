export class Message{
    id: string;
    content: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(id: string,content: string,likes: number,createdAt: Date,updatedAt: Date){
        this.id = id;
        this.content = content;
        this.likes = likes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}