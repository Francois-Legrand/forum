import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";
import { Message } from "../message/message.entity";
import { Document } from "mongoose";

export type SujetDocument = Sujet & Document;
@Schema()
export class Sujet {
    id: string;
    @IsNotEmpty()
    @Prop()
    title: string;
    @Prop()
    likes: number;
    @IsNotEmpty()
    @Prop()
    message : Message[];
    @Prop()
    createdAt : Date;
    @Prop()
    updatedAt : Date;
}
export const SujetSchema = SchemaFactory.createForClass(Sujet);

