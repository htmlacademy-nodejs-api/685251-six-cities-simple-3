import typegoose, { defaultClasses, Ref, getModelForClass, Severity } from '@typegoose/typegoose';
import { OfferType } from '../../types/offer-type.enum.js';
import { City, Location } from '../../types/offer-types.js';
import { UserEntity } from '../users/user.entity.js';


const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  },
  options: {
    allowMixed: Severity.ALLOW
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop()
  public postDate!: Date;

  @prop({})
  public city!: City;

  @prop()
  public previewImage!: string;

  @prop()
  public images!: string[];

  @prop()
  public isPremium!: boolean;

  @prop()
  public rating!: number;

  @prop({
    type: () => String,
    enum: OfferType
  })
  public type!: string;

  @prop()
  public bedrooms!: number;

  @prop()
  public maxAdults!: number;

  @prop()
  public price!: number;

  @prop()
  public goods!: string[];

  @prop({
    ref: UserEntity,
    required: true,
  })
  public userId!: Ref<UserEntity>;

  @prop({default: 0})
  public commentCount!: number;

  @prop()
  public location!: Location;
}

export const OfferModel = getModelForClass(OfferEntity);
