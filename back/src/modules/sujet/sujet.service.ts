import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Sujet, SujetDocument } from './sujet.entity';

@Injectable()
export class SujetService {
    constructor(@InjectModel(Sujet.name) private sujetModel : Model<SujetDocument>){}

    async create(createSujet : Sujet){
        let sujet = plainToInstance(Sujet, createSujet);
        sujet.createdAt = new Date();
        sujet.updatedAt = new Date();
        let createdSujet = new this.sujetModel(sujet);
        return createdSujet.save();
    }
    async findAll(){
        return await this.sujetModel.find();
    }
    async findById(id : string){
        let sujet = await this.sujetModel.findById(id);
        if(!sujet){
            throw new NotFoundException("sujet introuvable")
        }
        return sujet;
    }
}

