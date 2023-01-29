import { UserType } from '../../../types/user-type.enum.js';
import { IsString, Length, IsEnum} from 'class-validator';

export default class UpdateUserDto {
  @IsString({message: 'avatar is required'})
  public avatar!: string;

  @IsString({message: 'name is required'})
  @Length(1, 15, {message: 'Min length is 1, max is 15'})
  public name!: string;

  @IsEnum(UserType, {message: 'type must be Normal or Pro'})
  public userType!: UserType;
}
