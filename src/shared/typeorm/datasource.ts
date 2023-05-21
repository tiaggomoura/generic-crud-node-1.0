import 'dotenv/config';

import { injectable } from 'inversify';
import { DataSource } from 'typeorm';

const port = process.env.PORT_DB as number | undefined;

@injectable()
export class AppDataSource {
  public dataSouceConnection(): DataSource {
    return new DataSource({
      type: 'postgres',
      host: process.env.HOST_DB,
      port: port,
      username: process.env.USER_DB,
      password: process.env.PASS_DB,
      database: process.env.NAME_DB,
      synchronize: true,
      logging: true,
      entities: [`${__dirname}./../../entities/*.{ts,js}`],
      migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    });
  }
}
