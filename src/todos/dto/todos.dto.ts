import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class TodosDto {
  @IsString({ message: 'title must be a string' })
  @IsNotEmpty()
  readonly title: string;

  @IsString({ message: 'description must be a string' })
  @IsNotEmpty()
  readonly description: string;

  // @IsBoolean({ message: 'isCompleted must be a boolean' })
  // readonly isCompleted: boolean;

  // @IsDateString()
  // readonly createdAt: Date;
}
