import { Router } from 'express';
import BrandController from '../../controllers/BrandController';

const brandsRouter = Router();
const brandController = new BrandController();

brandsRouter.get('/', brandController.findAll);
brandsRouter.get('/:id', brandController.findById);
brandsRouter.post('/', brandController.create);
brandsRouter.put('/:id', brandController.update);
brandsRouter.delete('/:id', brandController.delete);

export default brandsRouter;
