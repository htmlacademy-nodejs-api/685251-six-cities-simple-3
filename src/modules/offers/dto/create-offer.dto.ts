import { OfferType } from '../../../types/offer-type.enum.js';
import { City, Location } from '../../../types/offer-types.js';
import {ArrayMinSize, IsArray, IsDateString, IsEnum, IsInt, Max, MaxLength, Min, MinLength, IsBoolean, IsString} from 'class-validator';


export default class CreateOfferDto {
  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title!: string;

  @MinLength(20, {message: 'Minimum description length must be 20'})
  @MaxLength(1024, {message: 'Maximum description length must be 1024'})
  public description!: string;

  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate!: Date;

  public city!: City;

  @IsString()
  public previewImage!: string;

  @IsArray({message: 'Must be 6 photos'})
  @ArrayMinSize(6)
  public images!: string[];

  @IsBoolean()
  public isPremium!: boolean;

  @IsInt({message: 'Rating must be an integer'})
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(5, {message: 'Maximum rating is 5'})
  public rating!: number;

  @IsEnum(OfferType, {message: 'type must be one of the following: apartment, house, room, hotel'})
  public type!: OfferType;

  @IsInt({message: 'Bedrooms must be an integer'})
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(8, {message: 'Maximum rating is 8'})
  public bedrooms!: number;

  @IsInt({message: 'Guest count must be an integer'})
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(10, {message: 'Maximum rating is 10'})
  public maxAdults!: number;

  @IsInt({message: 'Price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 100000'})
  public price!: number;

  @IsArray()
  public goods!: string[];

  public userId!: string;
  public commentCount!: number;
  public location!: Location;
}
