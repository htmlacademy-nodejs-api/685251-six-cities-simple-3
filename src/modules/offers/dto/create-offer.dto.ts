import { OfferType } from '../../../types/offer-type.enum.js';
import { City, Location } from '../../../types/offer-types.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!: City;
  public previewImage!: string;
  public images!: string[];
  public isPremium!: OfferType;
  public rating!: number;
  public type!: string;
  public bedrooms!: number;
  public maxAdults!: number;
  public price!: number;
  public goods!: string[];
  public userId!: string;
  public commentCount!: number;
  public location!: Location;
}
