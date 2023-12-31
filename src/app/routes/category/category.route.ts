import { Request, Response, Router } from 'express';
import CategoryRouteInterface from './category.route.interface';
import CreateCategoryUsecaseFactory from '../../../usecase/category/create/create.category.usecase.factory';
import FindCategoryUsecaseFactory from '../../../usecase/category/find/find.category.usecase.factory';
import FindAllCategoryUsecaseFactory from '../../../usecase/category/findAll/findAll.category.usecase.factory';
import UpdateCategoryUsecaseFactory from '../../../usecase/category/update/update.category.usecase.factory';

class CategoryRoute implements CategoryRouteInterface {
  router: Router;

  constructor() {
    this.router = Router();
    this.findAllCategory();
    this.createCategory();
    this.updateCategory();
    this.findCategory();
  }

  findAllCategory() {
    this.router.get('/findAllCategory', async (req: Request, res: Response) => {
      const { serverId } = req.query;
      const useCase = FindAllCategoryUsecaseFactory.create();
      const serverDto = { serverId: serverId as string };
      try {
        const output = await useCase.execute(serverDto);
        res.send(output);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).send({ error: error.message });
        }
      }
    });
  }

  createCategory() {
    this.router.post('/createCategory', async (req: Request, res: Response) => {
      const useCase = CreateCategoryUsecaseFactory.create();
      const { name, serverId, functionInGame } = req.body;
      const serverDto = {
        name,
        functionInGame,
        serverId,
      };
      try {
        const output = await useCase.execute(serverDto);
        res.send(output);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).send({ error: error.message });
        }
      }
    });
  }

  updateCategory() {
    this.router.put('/updateCategory/:id', async (req: Request, res: Response) => {
      const useCase = UpdateCategoryUsecaseFactory.create();
      const { name, serverId, functionInGame } = req.body;
      const { id } = req.params;
      const serverDto = {
        id,
        name,
        functionInGame,
        serverId,
      };
      try {
        const output = await useCase.execute(serverDto);
        res.send(output);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).send({ error: error.message });
        }
      }
    });
  }

  findCategory() {
    this.router.get('/findCategory/:id', async (req: Request, res: Response) => {
      const useCase = FindCategoryUsecaseFactory.create();
      const { id } = req.params;
      const serverDto = { id };
      try {
        const output = await useCase.execute(serverDto);
        res.send(output);
      } catch (error) {
        if (error instanceof Error) {
          res.status(404).send({ error: error.message });
        }
      }
    });
  }
}

export default new CategoryRoute().router;
