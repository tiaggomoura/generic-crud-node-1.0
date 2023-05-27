import { Repository } from 'typeorm';
import { BaseModel } from './BaseModel';
import { injectable } from 'inversify';

@injectable()
export abstract class BaseService<T extends BaseModel> {
  protected repository: Repository<T>;
  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async create(entity: T): Promise<T> {
    return await this.repository.save(entity);
  }

  async findOne(id: any): Promise<T | null> {
    return await this.repository.findOneBy({ id });
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async update(id: any, entity: T): Promise<T> {
    const updatedEntity = await this.repository.findOneBy({ id });
    if (!updatedEntity) {
      throw new Error(`Entity with id ${id} not found`);
    }
    const mergedEntity = Object.assign(updatedEntity, entity);
    return await this.repository.save(mergedEntity);
  }

  async delete(id: any): Promise<void> {
    const entity = await this.repository.findOneBy({ id });
    if (!entity) {
      throw new Error(`Entity with id ${id} not found`);
    }
    await this.repository.delete(id);
  }
}
