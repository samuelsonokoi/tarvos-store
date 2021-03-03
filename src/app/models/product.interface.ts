export interface IProduct {
  id: number;
  name: string;
  price: number;
  summary: string;
  description: string;
  images: string[];
  favorite: boolean;
  bgColor: string;
}