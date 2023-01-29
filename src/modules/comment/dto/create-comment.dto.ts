import {Length, IsString, IsInt, IsMongoId, Max, Min} from 'class-validator';


export default class CreateCommentDto {
  @IsString({message: 'name is required'})
  @Length(5, 1024, {message: 'Min length is 5, max is 1024'})
  public text!: string;

  @IsMongoId({message: 'offerId field must be valid an id'})
  public offerId!: string;

  @IsMongoId({message: 'userId field must be valid an id'})
  public userId!: string;

  @IsInt({message: 'Rating must be an integer'})
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(5, {message: 'Maximum rating is 5'})
  public rating!: number;
}
