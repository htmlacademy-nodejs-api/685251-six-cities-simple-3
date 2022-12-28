import { Offer } from '../types/offer-types.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [
    city, cityLat, cityLong, cityZoom,
    postDate, commentCount, previewImage,
    images, title, isPremium, rating, type,
    bedrooms, maxAdults, price, goods, description,
    name, email, avatar, password, isPro
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
    isPremium: isPremium === 'true',
    rating: +rating,
    type: type,
    bedrooms: +bedrooms,
    maxAdults: +maxAdults,
    price: +price,
    goods: goods.split(';'),
    description,
    commentCount: +commentCount,
    user: {name, email, avatar, password, isPro: isPro === 'true'}
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';
