import { Expose, Type } from 'class-transformer';
import UserResponse from '../../users/response/user.response.js';

export default class CommentResponse {
  @Expose()
  public id!: string;

  @Expose()
  public text!: string;

  @Expose({name: 'createdAt'})
  public postData!: string;

  @Expose({ name: 'userId'})
  @Type(() => UserResponse)
  public user!: UserResponse;
}
