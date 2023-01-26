import { Offer } from '../types/offer-types.js';
import crypto from 'crypto';
import { OfferType } from '../types/offer-type.enum.js';
import { UserType } from '../types/user-type.enum.js';
import { ClassConstructor, plainToInstance } from 'class-transformer';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [
    city, cityLat, cityLong, cityZoom,
    postDate, commentCount, previewImage,
    images, title, rating, type,
    bedrooms, maxAdults, price, goods, description,
    name, email, avatar, password
  ] = tokens;
  return {
    city: {
      name: city,
      location: {
        latitude: +cityLat,
        longitude: +cityLong,
        zoom: +cityZoom
      }
    },
    postDate: new Date(postDate),
    previewImage,
    images: images.split(';'),
    title,
    isPremium: OfferType[type as 'Premium' | 'Normal'],
    rating: +rating,
    type: type,
    bedrooms: +bedrooms,
    maxAdults: +maxAdults,
    price: +price,
    goods: goods.split(';'),
    description,
    commentCount: +commentCount,
    location: {
      latitude: +cityLat,
      longitude: +cityLong,
      zoom: +cityZoom
    },
    user: {name, email, avatar,
      password, userType: UserType[type as 'Pro' | 'Normal']}
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};

export const fillDTO = <T, V>(someDto: ClassConstructor<T>, plainObject: V) =>
  plainToInstance(someDto, plainObject, {excludeExtraneousValues: true});

export const createErrorObject = (message: string) => ({
  error: message,
});
