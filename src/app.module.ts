import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://diewoo:diewoo@cluster0-rda0p.mongodb.net/crenteria?retryWrites=true'),
    TodosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
