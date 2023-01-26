import { types } from '@typegoose/typegoose';
import { Container } from 'inversify';
import { ControllerInterface } from '../../common/controller/controller.interface.js';
import { Component } from '../../types/component-types.js';
import { CommentServiceInterface } from './comment-service.interface.js';
import CommentController from './comment.controller.js';
import { CommentEntity, CommentModel } from './comment.entity.js';
import CommentService from './comment.service.js';

const commentContainer = new Container;

commentContainer.bind<CommentServiceInterface>(Component.CommentServiceInterface).to(CommentService).inSingletonScope();
commentContainer.bind<types.ModelType<CommentEntity>>(Component.CommentModel).toConstantValue(CommentModel);
commentContainer.bind<ControllerInterface>(Component.CommentController).to(CommentController).inSingletonScope();

export {commentContainer};
