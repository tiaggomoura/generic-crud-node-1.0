import { Brand } from '@entities/Brand';
import DefaultError from '@shared/errors/DefaultError';
import { brandRepository } from 'src/repositories/BrandRepository';

interface IRequest {
  id: number;
}

class ShowBrandService {
  public async execute({ id }: IRequest): Promise<Brand | undefined> {
    const brand = await brandRepository.findOneBy({ id });

    if (!brand) {
      throw new DefaultError('Brand not found.');
    }

    return brand;
  }
}

export default ShowBrandService;
