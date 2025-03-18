import { faker } from '@faker-js/faker';
import { Product } from '../../../models/product-card';

export const generateFakeProduct = (): Product => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: parseFloat(faker.commerce.price()),
  image: faker.image.urlPicsumPhotos({ width: 250, height: 250 }),
});
