import { BaseModel } from '@shared/base/BaseModel';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { Subcategory } from './Subcategory';

@Entity('categories')
export class Category extends BaseModel {
  @Column()
  name: string;

  @OneToMany(() => Subcategory, subcategory => subcategory.category)
  @JoinColumn()
  subcategories: Subcategory[];
}
