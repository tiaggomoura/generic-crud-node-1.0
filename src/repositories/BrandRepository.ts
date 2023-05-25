import { Brand } from '../entities/Brand';
import { appDataSource } from '../shared/typeorm/appdatasource';

export const brandRepository = appDataSource.getRepository(Brand).extend({
  findByName(name: string) {
    return this.createQueryBuilder('brand')
      .where('brand.name = :name', { name })
      .getOne();
  },
});
