import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/utils.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

const MIN_PRICE = 100;
const MAX_PRICE = 10000;
const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;
const MIN_RATING = 1;
const MAX_RATING = 5;
const MIN_ROOMS = 1;
const MAX_ROOMS = 8;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const city = getRandomItem<string>(this.mockData.cities)
      .split(' ')
      .join('\t');
    const commentCount = generateRandomValue(MIN_ROOMS, MAX_ROOMS);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const postDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const images = getRandomItems<string>(this.mockData.images).join(';');
    const title = getRandomItems<string>(this.mockData.titles);
    const isPremium = generateRandomValue(0, 1) === 0;
    const rating = generateRandomValue(MIN_RATING, MAX_RATING, 1);
    const type = getRandomItem<string>(this.mockData.types);
    const bedrooms = generateRandomValue(MIN_ROOMS, MAX_ROOMS);
    const maxAdults = generateRandomValue(MIN_GUESTS, MAX_GUESTS);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE);
    const goods = getRandomItems<string>(this.mockData.goods).join(';');
    const description = getRandomItem<string>(this.mockData.descriptions);
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomItem<string>(this.mockData.passwords);
    const isPro = generateRandomValue(0, 1) === 0;


    return [
      city,
      postDate, commentCount, previewImage,
      images, title, isPremium, rating, type,
      bedrooms, maxAdults, price, goods, description,
      name, email, avatar, password, isPro
    ].join('\t');
  }
}
