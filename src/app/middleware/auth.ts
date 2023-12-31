import { NextFunction, Request, Response } from 'express';
import AuthTokenUsecaseFactory from '../../usecase/authToken/factory/authToken.usecase.factory';

export default class Auth {
  static verifyToken(req: Request, res: Response, next: NextFunction) {
    const tokenHeader = req.headers.authorization;

    if (!tokenHeader) {
      res.status(401).send('Token missing');
    }

    const token = tokenHeader?.split(' ')[1] || '';

    try {
      AuthTokenUsecaseFactory.create().verifyToken(token);
      next();
    } catch (error) {
      res.status(401).send('Invalid token');
    }
  }
}
