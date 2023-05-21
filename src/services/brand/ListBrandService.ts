import { brandRepository } from '../../repositories/BrandRepository';
import { Brand } from '../../entities/Brand';

class ListBrandService {
  public async execute(): Promise<Brand[]> {
    const marks = await brandRepository.find();
    return marks;
  }
}

export default ListBrandService;
