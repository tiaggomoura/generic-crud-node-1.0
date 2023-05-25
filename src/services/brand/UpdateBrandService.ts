import DefaultError from '../../shared/errors/DefaultError';
import { Brand } from '../../entities/Brand';
import { brandRepository } from '../../repositories/BrandRepository';

interface IRequest {
  id: number;
  name: string;
}

class UpdateBrandService {
  public async execute({ id, name }: IRequest): Promise<Brand | undefined> {
    const mark = await brandRepository.findOneBy({ id });

    if (!mark) {
      throw new DefaultError('Brand not found.');
    }

    const markExists = await brandRepository.findByName(name);

    if (markExists && name !== mark.name) {
      throw new DefaultError('There is already one brand with this name');
    }

    mark.name = name;

    await brandRepository.save(mark);

    return mark;
  }
}

export default UpdateBrandService;
