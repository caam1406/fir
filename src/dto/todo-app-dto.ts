import { IsNotEmpty } from 'class-validator';

export class createTodoDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  completed?: boolean;
}
