import { faker } from '@faker-js/faker';
import { IProduct } from '../../../models';

export const generateFakeProduct = (): IProduct => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: parseFloat(faker.commerce.price()),
  image: faker.image.urlPicsumPhotos({ width: 250, height: 250 }),
});
