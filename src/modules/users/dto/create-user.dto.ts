import { UserType } from '../../../types/user-type.enum.js';
import {IsEmail, IsString, Length, IsEnum} from 'class-validator';


export default class CreateUserDto {
  @IsEmail({}, {message: 'must be valid email'})
  public email!: string;

  public avatar!: string;

  @IsString({message: 'name is required'})
  @Length(1, 15, {message: 'Min length is 1, max is 15'})
  public name!: string;

  @IsString({message: 'password is required'})
  @Length(6, 12, {message: 'Min length is 6, max is 12'})
  public password!: string;

  @IsEnum(UserType, {message: 'type must be Normal or Pro'})
  public userType!: UserType;
}
