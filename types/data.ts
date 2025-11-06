// types/data.ts

export interface DictionaryItem {
  id: number;
  mandar: string;
  indonesia: string;
}

export interface CultureItem {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export interface EventItem {
  id: number;
  name: string;
  date: string;
  location: string;
  desc: string;
}

export interface ProductItem {
  id: number;
  name: string;
  price: string;
  image: string;
  desc: string;
  seller_wa: string;
}