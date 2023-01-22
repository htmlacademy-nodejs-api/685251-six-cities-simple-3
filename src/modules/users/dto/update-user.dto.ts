import { UserType } from '../../../types/user-type.enum';

export default class UpdateUserDto {
  public avatar!: string;
  public name!: string;
  public userType!: UserType;
}
