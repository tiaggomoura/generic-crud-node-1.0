import { inject, injectable } from 'inversify';
import { Brand } from '../../entities/Brand';
import { BrandRepository } from '../../repositories/BrandRepository';

import { BaseService } from '../base/BaseService';

@injectable()
export class BrandService extends BaseService<Brand> {
  constructor(@inject(BrandRepository) repo: BrandRepository) {
    super(repo.getRepository());
  }
}
