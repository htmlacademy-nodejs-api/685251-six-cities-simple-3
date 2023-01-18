import 'reflect-metadata';
import { Container } from 'inversify';
import { applicationContainer } from './app/application.container';
import { Component } from './types/component-types.js';
import Application from './app/application.js';
import { userContainer } from './modules/users/user.container';
import { offerContainer } from './modules/offers/offer.container.js';

async function bootstrap() {
  const mainContainer = Container.merge(applicationContainer, userContainer, offerContainer);
  const application = mainContainer.get<Application>(Component.Application);
  await application.init();
}

bootstrap();
