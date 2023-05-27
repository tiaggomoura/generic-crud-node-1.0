import { BaseModel } from '@shared/base/BaseModel';
import { Column, Entity } from 'typeorm';

@Entity('brands')
export class Brand extends BaseModel {
  @Column()
  name: string;
}
