export type Location = {
latitude: number;
longitude: number;
zoom: number;
}

export type City = {
name: string;
location: Location;
}

export type User = {
  name: string;
  email: string;
  avatar: string;
  password: string;
  isPro: boolean;
}

export type Offer = {
city: City;
postDate: Date;
previewImage: string;
images: string[];
title: string;
isPremium: boolean;
rating: number;
type: string;
bedrooms: number;
maxAdults: number;
price: number;
goods: string[];
description: string;
commentCount: number;
user: User;
}

