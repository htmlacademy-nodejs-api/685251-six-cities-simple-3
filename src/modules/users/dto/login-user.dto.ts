import {IsEmail, IsString} from 'class-validator';


export default class LoginUserDto {
  @IsEmail({}, {message: 'must be valid email'})
  public email!: string;

  @IsString({message: 'password is required'})
  public password!: string;
}
