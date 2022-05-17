import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SujetModule } from './modules/sujet/sujet.module';
import { MessageModule } from './modules/message/message.module';
@Module({
  imports: [
    //MongooseModule.forRoot(`mongodb://localhost/mongo`),
    MongooseModule.forRoot(`mongodb://mongo/mongo`),
    SujetModule,
    MessageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

