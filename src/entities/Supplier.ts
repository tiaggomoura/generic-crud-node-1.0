import { BaseModel } from '@shared/base/BaseModel';
import { Column, Entity } from 'typeorm';

@Entity('suppliers')
export class Supplier extends BaseModel {
  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  instagram: string;

  @Column()
  address: string;

  @Column()
  site: string;

  @Column()
  virtual: string;
}
