import { Brand } from '../../entities/Brand';
import { brandRepository } from '../../repositories/BrandRepository';
import DefaultError from '../../shared/errors/DefaultError';

interface IRequest {
  name: string;
}

class CreateBrandService {
  public async execute({ name }: IRequest): Promise<Brand | undefined> {
    const brandExists = await brandRepository.findByName(name);

    if (brandExists) {
      throw new DefaultError('Brand number already used.');
    }

    const brand = brandRepository.create({
      name,
    });

    await brandRepository.save(brand);

    return brand;
  }
}
export default CreateBrandService;
