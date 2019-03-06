
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Itodo, ITodosService } from './interfaces/index';
import { createTodoDto } from './dto/createTodo.dto';
import { debug } from 'console';

@Injectable()
export class TodosService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Itodo>) { }

    async findAll(): Promise<Itodo[]> {
        return await this.todoModel.find().exec();
    }
    async findOne(options: object): Promise<Itodo> {
        return await this.todoModel.findOne(options).exec();
    }
    async findById(ID: number): Promise<Itodo> {
        return await this.todoModel.findById(ID).exec();
    }
    async create(createTodoDto: createTodoDto): Promise<Itodo> {
        const createTodo = new this.todoModel(createTodoDto);
        return await createTodo.save();
    }
    async update(ID: number, newValue: Itodo): Promise<Itodo> {
        const todo = await this.todoModel.findById(ID).exec();
        if (!todo._id) {
            debug('No encontrado');
        }
        await this.todoModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.todoModel.findById(ID).exec();
    }
    async delete(ID:number):Promise<String>{
        try {
            await this.todoModel.findByIdAndRemove(ID).exec();
            return 'Se  ha eliminado con exito'
        } catch (error) {
            debug(error);
            return 'No se puede borrar este registro'
        }
    }
}
