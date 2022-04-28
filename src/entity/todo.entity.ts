import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'todos' }) //Set Table Name
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ type: 'varchar', length: 25 })
  title: string;
  @Column({ type: 'varchar', length: 255 })
  description: string;
  @Column({ type: 'boolean', default: false })
  done: boolean;
  @CreateDateColumn()
  createAt: string;
  @UpdateDateColumn()
  updataAt: string;
  @DeleteDateColumn()
  deletedAt: string;
}
