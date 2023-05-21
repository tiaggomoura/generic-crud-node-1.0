import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './Category';

@Entity('subcategories')
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category_id: string;

  @ManyToOne(() => Category, category => category.subcategories)
  @JoinColumn({
    name: 'category_id',
  })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
