import { IsNotEmpty } from 'class-validator';

export class deleteTaskDto {
  @IsNotEmpty()
  id: string;
}
