import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from 'src/controllers/todo/entity/todo.entity';
import { TodoController } from 'src/controllers/todo/todo.controller';
import { TodoService } from 'src/services/todo/todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService], //Export the service so that it can be used in other modules
})
export class TodoModule {}
