import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from 'src/services/todo/todo.service';

@Controller('api/v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  async index() {
    return this.todoService.findAll();
  }
  @Post()
  async create(@Body() body) {
    return this.todoService.create(body);
  }
  @Get('/:id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.todoService.findOneOrFail(id);
  }
  @Put('/:id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body) {
    return this.todoService.update(id, body);
  }
  @Delete('/:id')
  @HttpCode(204) //Its a 204 no content to indicate that the request has been fulfilled and no additional content will be returned.
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.todoService.softDelete(id);
  }
}
