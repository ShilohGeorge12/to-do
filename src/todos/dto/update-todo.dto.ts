import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTodosDto {
  @IsOptional()
  @IsString({ message: 'title must be a string' })
  readonly title: string;

  @IsOptional()
  @IsString({ message: 'description must be a string' })
  readonly description: string;

  @IsOptional()
  @IsBoolean({ message: 'isCompleted must be a boolean' })
  readonly isCompleted: boolean;
}
