import { Brand } from '@entities/Brand';
import { BrandService } from '@services/brand/BrandService';
import { BaseController } from '@shared/base/BaseController';
import { inject } from 'inversify';
import { controller } from 'inversify-express-utils';

@controller('/brands')
export class BrandController extends BaseController<Brand> {
  constructor(@inject(BrandService) service: BrandService) {
    super(service);
  }

  protected setupRoutes(): void {
    this._router.get('/', this.getAll.bind(this));
    this._router.get('/:id', this.getOne.bind(this));
    this._router.post('/:id', this.create.bind(this));
    this._router.put('/:id', this.update.bind(this));
    this._router.delete('/:id', this.delete.bind(this));
  }
}
