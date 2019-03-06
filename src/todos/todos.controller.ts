import { Controller, Get, Response, HttpStatus, Body, Param, Post, Res, Patch, Delete } from '@nestjs/common';

import { TodosService } from './todos.service';
import { createTodoDto } from './dto/createTodo.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
@ApiUseTags('todos')
@Controller('todos')
export class TodosController {
    constructor(private readonly TodosService: TodosService) {

    }
    @Get()
    public async getTodos(@Response() res) {
        const todos = await this.TodosService.findAll();
        return res.status(HttpStatus.OK).json(todos);
    }
    @Get('find')
    public async findTodo(@Response() res, @Body() body) {
        const querycondition = body;
        const todos = await this.TodosService.findOne(querycondition);
        return res.status(HttpStatus.OK).json(todos);
    }
    @Get('/:id')
    public async getTodo(@Response() res, @Param() param) {
        const todos = await this.TodosService.findById(param.id);
        return res.status(HttpStatus.OK).json(todos);
    }
    @Post()
    @ApiResponse({ status: 201, description: 'Registro creado con exito' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    public async createTodo(@Response() res, @Body() createTodoDto: createTodoDto) {
        const todo = await this.TodosService.create(createTodoDto);
        return res.status(HttpStatus.OK).json(todo);
    }
    @Patch(':/id')
    public async updateTodo(@Param() param, @Response() res, @Body() body) {
        const todo = await this.TodosService.update(param.id, body);
        return res.status(HttpStatus.OK).json(todo);
    }

    @Delete(':/id')
    public async deleteTodo(@Param() param, @Res() res) {
        const todo = await this.TodosService.delete(param.id);
        return res.status(HttpStatus.OK).json(todo);
    }
}
