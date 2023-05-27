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
import { BaseModel } from '@shared/base/BaseModel';

@Entity('subcategories')
export class Subcategory extends BaseModel {
  @Column()
  name: string;

  @Column()
  category_id: string;

  @ManyToOne(() => Category, category => category.subcategories)
  @JoinColumn({
    name: 'category_id',
  })
  category: Category;
}
