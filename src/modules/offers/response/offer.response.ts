import {Expose, Type} from 'class-transformer';
import { OfferType } from '../../../types/offer-type.enum.js';
import { City, Location } from '../../../types/offer-types.js';
import UserResponse from '../../users/response/user.response.js';

export default class OfferResponse {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: string;

  @Expose()
  public city!: City;

  @Expose()
  public PreviewImage!: string;

  @Expose()
  public images!: string[];

  @Expose()
  public isPremium!: OfferType;

  @Expose()
  public rating!: number;

  @Expose()
  public type!: string;

  @Expose()
  public bedrooms!: number;

  @Expose()
  public maxAdults!: number;

  @Expose()
  public price!: number;

  @Expose()
  public goods!: string[];

  @Expose({ name: 'userId'})
  @Type(() => UserResponse)
  public user!: UserResponse;

  @Expose()
  public commentCount!: number;

  @Expose()
  public location!: Location;

}
