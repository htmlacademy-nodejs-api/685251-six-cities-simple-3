import typegoose, { getModelForClass, defaultClasses, Ref } from '@typegoose/typegoose';
import { OfferEntity } from '../offers/offer.entity.js';
import { UserEntity } from '../users/user.entity.js';

const {prop, modelOptions} = typegoose;

export interface CommentEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({trim: true, required: true})
  public text!: string;

  @prop({required: true, ref: OfferEntity})
  public offerId!: Ref<OfferEntity>;

  @prop({required: true, ref: UserEntity})
  public userId!: Ref<UserEntity>;

  @prop({required: true})
  public rating!: number;

}

export const CommentModel = getModelForClass(CommentEntity);
