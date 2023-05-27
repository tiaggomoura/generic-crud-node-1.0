import { Brand } from '@entities/Brand';
import { BaseService } from '@shared/base/BaseService';
import { inject } from 'inversify';
import { BrandRepository } from 'src/repositories/BrandRepository';

export class BrandService extends BaseService<Brand> {
  constructor(@inject(BrandRepository) repo: BrandRepository) {
    super(repo.getRepository());
  }
}
