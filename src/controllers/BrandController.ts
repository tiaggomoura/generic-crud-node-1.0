import CreateBrandService from '@services/brand/CreateBrandService';
import DeleteBrandService from '@services/brand/DeleteBrandService';
import ListBrandService from '@services/brand/ListBrandService';
import ShowBrandService from '@services/brand/ShowMarkService';
import UpdateBrandService from '@services/brand/UpdateBrandService';
import { Request, Response } from 'express';

export default class BrandController {
  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listBrands = new ListBrandService();

    const brands = await listBrands.execute();

    return response.json(brands);
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const brand = new ShowBrandService();

    const mark = await brand.execute({ id: parseInt(id) });

    return response.json(mark);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createBrand = new CreateBrandService();

    const brand = await createBrand.execute({
      name,
    });

    return response.json(brand);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.params;

    const updateBrand = new UpdateBrandService();

    const brand = await updateBrand.execute({
      id: parseInt(id),
      name,
    });

    return response.json(brand);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteBrand = new DeleteBrandService();

    await deleteBrand.execute({ id: parseInt(id) });

    return response.json([]);
  }
}
