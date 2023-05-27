import { Request, Response, Router } from 'express';
import { BaseModel } from './BaseModel';
import { BaseService } from './BaseService';
import { injectable } from 'inversify';

@injectable()
export abstract class BaseController<T extends BaseModel> {
  private router: Router;

  protected abstract setupRoutes(): void;

  constructor(private readonly _service: BaseService<T>) {
    this.router = Router();
    this.setupRoutes();
  }

  public get _router(): Router {
    return this.router;
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const entities = await this._service.findAll();
    return res.json(entities);
  }

  async getOne(req: Request, res: Response): Promise<Response> {
    const entity = await this._service.findOne(req.params.id);
    if (!entity) {
      return res.status(404).send('Entity not found.');
    }
    return res.json(entity);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const entity = await this._service.create(req.body);
    return res.json(entity);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const entity = await this._service.update(req.params.id, req.body);
    return res.json(entity);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    await this._service.delete(req.params.id);
    return res.sendStatus(204);
  }
}
