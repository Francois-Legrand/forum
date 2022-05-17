import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";
import { Document } from "mongoose";
export type MessageDocument = Message & Document
@Schema()
export class Message {
    _id: string;
    @IsNotEmpty()
    @Prop()
    content: string;
    @Prop()
    likes: number;
    @Prop()
    createdAt : Date;
    @Prop()
    updatedAt : Date;
}
export const MessageSchema = SchemaFactory.createForClass(Message);