import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { TodoService } from './services/todo/todo.service';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
