import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './controllers/todo/todo.controller';
// import { TodoModule } from './modules/todo/todo.module';
import { TodoService } from './services/todo/todo.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get('DB_HOST', 'localhost'),
        port: Number(configService.get('DB_PORT', 3306)),
        username: configService.get('DB_USERNAME', 'root'),
        password: configService.get('DB_PASSWORD', '123'),
        database: configService.get('DB_NAME', 'todo'),
        entities: [],
        synchronize: true,
      }),
    }),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
