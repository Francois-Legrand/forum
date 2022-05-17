import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SujetController } from './sujet.controller';
import { Sujet, SujetSchema } from './sujet.entity';
import { Message, MessageSchema } from '../message/message.entity';
import { SujetService } from './sujet.service';
import { MessageService } from '../message/message.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            {name : Sujet.name, schema : SujetSchema},
            {name : Message.name, schema : MessageSchema},
        ])
    ],
    controllers: [SujetController],
    providers: [SujetService,MessageService],
    exports: [SujetService,MessageService]    
})
export class SujetModule {}
