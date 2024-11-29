import { Model } from 'mongoose';
import { NewTodo, UpdateTodo } from 'src/interfaces';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { TodoEntity } from './entities/todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(TodoEntity.name) private TodoModel: Model<TodoEntity>,
  ) {}

  async getTodos(page: number, limit: number) {
    const skip = (page - 1) * limit;
    // Perform both queries in parallel using Promise.all
    const [todos, totalItems] = await Promise.all([
      this.TodoModel.find()
        .select('title _id description isCompleted createdAt')
        .skip(skip)
        .limit(limit)
        .exec(),
      this.TodoModel.countDocuments(), // Count total documents in parallel
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return {
      todos,
      totalItems,
      totalPages,
      currentPage: page,
    };
  }
  async getTodo(id: string) {
    const todo = await this.TodoModel.findOne({ _id: id }).select(
      'title _id description isCompleted createdAt',
    );

    if (!todo) {
      return { error: 'Todo Item was not found' };
    }
    return todo;
  }

  async addNewTodo(newTodo: NewTodo) {
    const ifTodoExits = await this.TodoModel.findOne({
      title: newTodo.title,
      description: newTodo.description,
    }).select('title _id description isCompleted createdAt');
    if (ifTodoExits) {
      return ifTodoExits;
    }
    const newTodoDocument = await this.TodoModel.create({
      title: newTodo.title,
      description: newTodo.description,
    });

    await newTodoDocument.save();

    return {
      _id: newTodoDocument._id,
      title: newTodoDocument.title,
      description: newTodoDocument.description,
      isCompleted: newTodoDocument.isCompleted,
      createdAt: newTodoDocument.createdAt,
    };
  }

  async updateTodo(id: string, updates: UpdateTodo) {
    // Filter updates to only include allowed fields
    const allowedFields = ['title', 'description', 'isCompleted'];
    const fieldsToUpdate = Object.keys(updates).filter((key) =>
      allowedFields.includes(key),
    );

    if (fieldsToUpdate.length === 0) {
      return { error: 'No valid fields provided for update' };
    }

    // Find the todo by ID and apply updates
    const todo = await this.TodoModel.findById(id).select(
      'title _id description isCompleted createdAt',
    );
    if (!todo) {
      return { error: 'Todo item not found' };
    }

    // Update each field safely
    fieldsToUpdate.forEach((field) => {
      (todo as any)[field] = updates[field];
    });

    await todo.save();
    return todo;
  }

  async removeTodo(id: string) {
    const ifTodoExist = await this.TodoModel.exists({ _id: id });
    if (!ifTodoExist) {
      return { error: 'Todo Item was not found' };
    }

    await this.TodoModel.findOneAndDelete({ _id: id });
    return { message: 'Todo Item has been deleted!' };
  }
}
