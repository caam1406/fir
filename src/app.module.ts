import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { TodoService } from './services/todo/todo.service';
import { TodoController } from './controllers/todo/todo.controller';

@Module({
  imports: [TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
