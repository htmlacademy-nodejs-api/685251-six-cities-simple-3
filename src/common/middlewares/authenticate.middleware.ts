import { createSecretKey } from 'crypto';
import * as jose from 'jose';
import { Request, Response, NextFunction } from 'express';
import { MiddlewareInterface } from '../../types/middleware.interface.js';
import HttpError from '../errors/http-error.js';
import { StatusCodes } from 'http-status-codes';

export class AuthenticateMiddleware implements MiddlewareInterface {
  constructor(private readonly jwtSecret: string) {}

  public async execute(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const authtorizationHeader = req.headers?.authorization?.split(' ');

    if(!authtorizationHeader) {
      return next();
    }

    const [,token] = authtorizationHeader;

    try {
      const {payload} = await jose.jwtVerify(token, createSecretKey(this.jwtSecret, 'utf-8'));
      req.user = { email: payload.email as string, id: payload.id as string};

      return next();
    } catch {

      return next(new HttpError(
        StatusCodes.UNAUTHORIZED,
        'Invalid token',
        'AuthenticateMiddleware'
      ));
    }

  }
}
