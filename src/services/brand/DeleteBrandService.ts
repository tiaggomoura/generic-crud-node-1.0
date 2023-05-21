import { brandRepository } from '../../repositories/BrandRepository';
import DefaultError from '../../shared/errors/DefaultError';
interface IRequest {
  id: number;
}
class DeleteBrandService {
  public async execute({ id }: IRequest): Promise<void> {
    const brand = await brandRepository.findOneBy({ id });

    if (!brand) {
      throw new DefaultError('Brand not found.');
    }
    await brandRepository.remove(brand);
  }
}

export default DeleteBrandService;
