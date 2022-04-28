import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/entitys/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }
  async findOneOrFail(id: string): Promise<TodoEntity> {
    try {
      return await this.todoRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }
  async create(todo: TodoEntity): Promise<TodoEntity> {
    return await this.todoRepository.save(this.todoRepository.create(todo));
  }
  async update(id: string, todo: TodoEntity): Promise<TodoEntity> {
    try {
      await this.todoRepository.update(id, todo);
    } catch (error) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return await this.todoRepository.findOne(id);
  }
  async softDelete(id: string): Promise<TodoEntity> {
    const todo = await this.todoRepository.findOne(id);
    await this.todoRepository.softDelete(id);
    return todo;
  }
}
