import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Brand } from './Brand';
import { Subcategory } from './Subcategory';
import { Supplier } from './Supplier';
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column('decimal')
  price_cost: number;

  @Column('decimal')
  price_sale: number;

  @Column('decimal')
  price_promotional: number;

  @Column()
  in_promotion: string;

  @Column()
  supplier_id: string;

  @Column()
  subcategory_id: string;

  @OneToOne(() => Subcategory)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: Subcategory;

  @Column()
  mark_id: string;

  @OneToOne(() => Brand)
  @JoinColumn({ name: 'mark_id' })
  mark: Brand;

  @OneToOne(() => Supplier)
  @JoinColumn({ name: 'supplier_id' })
  supplier: Supplier;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
