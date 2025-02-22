import { IProduct } from './product-card.model';

export interface IProductFile {
  id: string;
  aligment: 'left' | 'center' | 'right';
  products: IProduct[];
}
