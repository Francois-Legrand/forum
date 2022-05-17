import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Message } from '../message/message.entity';
import { MessageService } from '../message/message.service';
import { Sujet } from './sujet.entity';
import { SujetService } from './sujet.service';

@Controller('sujet')
export class SujetController {
    constructor(private sujetService : SujetService, private messageService : MessageService){}

    @Post()
    create(@Body() createSujet : Sujet, @Body() createMessage : Message){
        this.messageService.create(createMessage);
        return this.sujetService.create(createSujet);
    }
    @Get()
    findAll(){
        return this.sujetService.findAll();
    }
    @Get(':id')
    findById(@Param('id') id : string){
        return this.sujetService.findById(id);
    }
}
    