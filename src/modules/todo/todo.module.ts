import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from 'src/controllers/todo/todo.controller';
import { TodoEntity } from 'src/entity/todo.entity';
import { TodoService } from 'src/services/todo/todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService], //Export the service so that it can be used in other modules
})
export class TodoModule {}
