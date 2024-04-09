import { User } from '../../../users/entities/user.entity';
import { Product } from '../../../products/entities/product.entity';
import { Order } from '../../../users/entities/order.entity';

describe('Order Entity', () => {
  const date = new Date();
  const user = new User();
  const products = [new Product(), new Product()];
  const order = new Order();
  order.date = date;
  order.user = user;
  order.products = products;

  it('Should return the date', () => {
    expect(order.date).toEqual(date);
  });
  it('Should return the user', () => {
    expect(order.user).toEqual(user);
  });
  it('Should return the products', () => {
    expect(order.products).toEqual(products);
  });
});
