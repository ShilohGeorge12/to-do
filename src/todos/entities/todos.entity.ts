import { ObjectId } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TodoEntity {
  _id: ObjectId;

  @Prop({
    message: 'title must be a string',
    required: [true, 'isCompleted is required!'],
    type: String,
  })
  title: string;

  @Prop({
    message: 'description must be a string',
    required: [true, 'isCompleted is required!'],
    type: String,
  })
  readonly description: string;

  @Prop({
    default: false,
    message: 'isCompleted must be a boolean',
    type: Boolean,
  })
  readonly isCompleted: boolean;

  @Prop({ default: () => Date.now(), type: Date })
  readonly createdAt: Date;
}

export const TodoSchema = SchemaFactory.createForClass(TodoEntity);
