import { readFileSync } from 'fs';
import { Offer } from '../../types/offer-types.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }


  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([city, cityLat, cityLong, cityZoom, postDate, commentCount, previewImage, images, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, description, id]) =>({
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
        id: +id,
        commentCount: +commentCount
      }
      ));
  }
}

