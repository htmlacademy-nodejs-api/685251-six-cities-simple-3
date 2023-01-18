import { OfferType } from './offer-type.enum.js';
import { UserType } from './user-type.enum.js';

export type Location = {
latitude: number;
longitude: number;
zoom?: number;
}

export type City = {
name: string;
location: Location;
}

export type User = {
  name: string;
  email: string;
  avatar: string;
  userType: UserType;
}

export type Offer = {
title: string;
description: string;
postDate: Date;
city: City;
previewImage: string;
images: string[];
isPremium: OfferType;
rating: number;
type: string;
bedrooms: number;
maxAdults: number;
price: number;
goods: string[];
user: User;
commentCount: number;
location: Location;
}

