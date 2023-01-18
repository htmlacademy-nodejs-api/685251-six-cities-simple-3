import { injectable, inject } from 'inversify';
import { ConfigInterface } from '../common/config/config.interface';
import { DatabaseInterface } from '../common/database-client/database.interface';
import { LoggerInterface } from '../common/logger/logger.interface';
import { Component } from '../types/component-types.js';
import { getURI } from '../utils/db.js';

@injectable()
export default class Application {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.ConfigInterface) private config: ConfigInterface,
    @inject(Component.DatabaseInteface) private databaseClient: DatabaseInterface
  ) {}

  public async init() {
    this.logger.info('Application initialization...');
    this.logger.info(`Get value from env $PORT ${this.config.get('PORT')}`);
    const uri = getURI(
      this.config.get('DB_USER'),
      this.config.get('DB_PASSWORD'),
      this.config.get('DB_HOST'),
      this.config.get('DB_PORT'),
      this.config.get('DB_NAME'),
    );

    await this.databaseClient.connect(uri);

  }
}