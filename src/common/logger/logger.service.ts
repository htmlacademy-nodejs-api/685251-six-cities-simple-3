import { injectable } from 'inversify';
import pino, { Logger } from 'pino';
import { LoggerInterface } from './logger.interface';

@injectable()
export default class LoggerService implements LoggerInterface{
  private logger!: Logger;

  constructor() {
    this.logger = pino();
    this.logger.info('Logger started...');
  }

  public info(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args);
  }

  public error(message: string, ...args: unknown[]): void {
    this.logger.error(message, ...args);
  }

  public debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args);
  }

  public trace(message: string, ...args: unknown[]): void {
    this.logger.trace(message, ...args);
  }
}
