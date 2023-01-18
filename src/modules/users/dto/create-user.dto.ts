import { UserType } from '../../../types/user-type.enum';

export default class CreateUserDto {
  public email!: string;
  public avatar!: string;
  public name!: string;
  public password!: string;
  public userType!: UserType;
}
