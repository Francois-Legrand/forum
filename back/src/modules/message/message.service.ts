import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './message.entity';

@Injectable()
export class MessageService {
    constructor(@InjectModel(Message.name) private messageModel : Model<MessageDocument>){}

    async create(createMessage : Message){
        let message = plainToInstance(Message, createMessage);
        message.createdAt = new Date();
        message.updatedAt = new Date();
        let createdMessage = new this.messageModel(message);
        return createdMessage.save();
    }
    async findAll(){
        return await this.messageModel.find();
        
    }
    async findById(id : string){
        let message = await this.messageModel.findById(id);
        if(!message){
            throw new NotFoundException("sujet introuvable")
        }
        return message;
    }
}
