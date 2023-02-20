import { Offer } from '../types/offer-types.js';
import crypto from 'crypto';
import { OfferType } from '../types/offer-type.enum.js';
import { UserType } from '../types/user-type.enum.js';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import * as jose from 'jose';
import { isObject, ValidationError } from 'class-validator';
import { ValidationErrorField } from '../types/validation-error-field.js';
import { ServiceError } from '../types/service-error.enum.js';
import { UnknownObject } from '../types/unknown-object.type.js';
import { DEFAULT_STATIC_IMAGES } from '../app/application.constant.js';


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
    isPremium: true,
    rating: +rating,
    type: OfferType[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
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

export const createErrorObject = (serviceError: ServiceError, message: string, details: ValidationError[] = []) => ({
  errorType: serviceError,
  message,
  details: [...details]
});

export const createJWT = async (algoritm: string, jwtSecret: string, payload: object): Promise<string> =>
  new jose.SignJWT({...payload})
    .setProtectedHeader({alg: algoritm})
    .setIssuedAt()
    .setExpirationTime('2d')
    .sign(crypto.createSecretKey(jwtSecret, 'utf-8'));

export const transformErrors = (errors: ValidationError[]): ValidationErrorField[] =>
  errors.map(({property, value, constraints}) => ({
    property,
    value,
    messages: constraints ? Object.values(constraints) : []
  }));

export const getFullSeverPath = (host: string, port: number) => `http://${host}:${port}`;

export const transformProperty = (
  property: string,
  someObject: UnknownObject,
  transformFn: (object: UnknownObject) => void
) => {
  Object.keys(someObject)
    .forEach((key) => {
      if (key === property)
      {transformFn(someObject);
      } else if (isObject(someObject[key])) {
        transformProperty(property, someObject[key] as UnknownObject, transformFn);
      }
    });
};

export const transformObject = (
  properties: string[],
  staticPath: string,
  uploadPath: string,
  data: UnknownObject
) => {
  properties
    .forEach((property) =>
      transformProperty(
        property, data,
        (target: UnknownObject) => {
          const rootPath = DEFAULT_STATIC_IMAGES.includes(target[property] as string) ? staticPath : uploadPath;
          target[property] = `${rootPath}/${target[property]}`;
        }));
};
