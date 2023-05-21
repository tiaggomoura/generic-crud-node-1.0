import { Brand } from '../../entities/Brand';
import { Category } from './../../entities/Category';
import { Product } from './../../entities/Product';
import { Subcategory } from './../../entities/Subcategory';
import { Supplier } from './../../entities/Supplier';

import 'dotenv/config';
import { DataSource } from 'typeorm';

const port = process.env.PORT_DB as number | undefined;

export const appDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST_DB,
  port: port,
  username: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
  synchronize: true,
  logging: true,
  // entities: [`${__dirname}./../../entities/*.{ts,js}`],
  entities: [Product, Brand, Supplier, Category, Subcategory],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
