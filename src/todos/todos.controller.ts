import mongoose from 'mongoose';

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { TodosDto } from './dto/todos.dto';
import { UpdateTodosDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('/api/todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllTodo(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.todosService.getTodos(page, limit);
  }

  @Get('/:id')
  getSingleTodo(@Param('id') id: string) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId)
      throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    return this.todosService.getTodo(id);
  }

  @Post()
  createTodo(@Body() newtodo: TodosDto) {
    return this.todosService.addNewTodo(newtodo);
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() updatedTodo: UpdateTodosDto) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId)
      throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    return this.todosService.updateTodo(id, updatedTodo);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId)
      throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    return this.todosService.removeTodo(id);
  }
}
