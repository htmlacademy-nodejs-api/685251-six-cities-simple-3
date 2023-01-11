import {config } from 'dotenv';
import { injectable, inject } from 'inversify';
import { Component } from '../../types/component-types.js';
import { LoggerInterface } from '../logger/logger.interface';
import { configSchema, ConfigSchema } from './config-schema.js';
import { ConfigInterface } from './config.interface';

@injectable()
export default class ConfigService implements ConfigInterface {
  private config: ConfigSchema;

  constructor(@inject(Component.LoggerInterface) private logger: LoggerInterface
  ) {
    const parsedOutput = config();

    if (parsedOutput.error) {
      throw new Error('Can\'t read .env file. Perhaps the file does not exisis.');
    }
    configSchema.load({});
    configSchema.validate({allowed: 'strict', output: this.logger.info});

    this.config = configSchema.getProperties();
    this.logger.info('.env file found and successfully parsed!');
  }

  public get<T extends keyof ConfigSchema>(key: T) {
    return this.config[key];
  }
}
