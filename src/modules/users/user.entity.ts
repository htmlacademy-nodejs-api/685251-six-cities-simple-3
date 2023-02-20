import typegoose, { getModelForClass, defaultClasses } from '@typegoose/typegoose';
import { DEFAULT_AVATAR } from '../../constants/constants.js';
import { User } from '../../types/offer-types.js';
import { UserType } from '../../types/user-type.enum.js';
import { createSHA256 } from '../../utils/common.js';

const {prop, modelOptions} = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})
export class UserEntity extends defaultClasses.TimeStamps implements User {
  constructor(data: User) {
    super();

    this.name = data.name;
    this.email = data.email;
    this.avatar = data.avatar;
    this.userType = data.userType;

  }

  @prop({required: true, default: ''})
  public name!: string;

  @prop({ unique: true, required: true})
  public email!: string;

  @prop({ default: DEFAULT_AVATAR})
  public avatar!: string;

  @prop({required: true, default: ''})
  private password!: string;

  @prop({
    type: () => String,
    enum: UserType
  })
  public userType!: UserType;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }

  public verifyPassword(password: string, salt: string) {
    const hashPassword = createSHA256(password, salt);
    return hashPassword === this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
