import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
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
  // @HttpCode(HttpStatus.OK)
  getSingleTodo(@Param('id') id: string) {
    return this.todosService.getTodo(id);
  }

  @Post()
  createTodo(@Body() newtodo: TodosDto) {
    return this.todosService.addNewTodo(newtodo);
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() updatedTodo: UpdateTodosDto) {
    return this.todosService.updateTodo(id, updatedTodo);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.removeTodo(id);
  }
}
