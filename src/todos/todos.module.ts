import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { TodosService } from './todos.service';
import { todoSchema } from './schema/todo.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Todo',schema:todoSchema}])],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
