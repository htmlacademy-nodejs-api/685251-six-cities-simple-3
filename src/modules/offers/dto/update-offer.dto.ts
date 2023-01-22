import { OfferType } from '../../../types/offer-type.enum.js';
import { City, Location } from '../../../types/offer-types.js';

export default class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public city?: City;
  public previewImage?: string;
  public images?: string[];
  public isPremium?: OfferType;
  public type?: string;
  public bedrooms?: number;
  public maxAdults?: number;
  public price?: number;
  public goods?: string[];
  public location?: Location;
}
