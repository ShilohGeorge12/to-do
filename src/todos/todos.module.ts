import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoEntity, TodoSchema } from './entities/todos.entity';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TodoEntity.name, schema: TodoSchema }]),
  ],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
