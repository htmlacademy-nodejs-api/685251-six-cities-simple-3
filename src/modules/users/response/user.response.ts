import {Expose} from 'class-transformer';
import { UserType } from '../../../types/user-type.enum.js';

export default class UserResponse {
  @Expose()
  public email!: string ;

  @Expose()
  public avatar!: string;

  @Expose()
  public name!: string;

  @Expose()
  public userType!: UserType;

}
