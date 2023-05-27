import { injectable } from 'inversify';
import { Brand } from '../entities/Brand';
import { appDataSource } from '../shared/typeorm/appdatasource';
import { Repository } from 'typeorm';

@injectable()
export class BrandRepository {
  private ormRepostory: Repository<Brand>;

  constructor() {
    this.ormRepostory = appDataSource.getRepository(Brand).extend({
      findByName(name: string) {
        return this.createQueryBuilder('brand')
          .where('brand.name = :name', { name })
          .getOne();
      },
    });
  }

  public getRepository() {
    return this.ormRepostory;
  }
}
