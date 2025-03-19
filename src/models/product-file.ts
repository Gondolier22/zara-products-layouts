import { Product } from './product-card';

export interface ProductFile {
  id: string;
  aligment: 'left' | 'center' | 'right';
  products: Product[];
}
