import { injectable, inject } from 'inversify';
import { ConfigInterface } from '../common/config/config.interface';
import { LoggerInterface } from '../common/logger/logger.interface';
import { Component } from '../types/component-types.js';

@injectable()
export default class Application {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.ConfigInterface) private config: ConfigInterface
  ) {}

  public async init() {
    this.logger.info('Application initialization...');
    this.logger.info(`Get value from env $PORT ${this.config.get('PORT')}`);
  }
}
