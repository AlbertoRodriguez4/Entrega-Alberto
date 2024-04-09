import { Category } from '../../../products/entities/category.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;
  @Column({ type: 'text' })
  description: string;
  
  @Column({ type: 'int' })
  price: number;
  
  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar' })
  image: string;

  @ManyToMany(()=>Category, (category)=>category.products)
  categories: Category[];
}

describe('Product', () => {
  let product: Product;

  beforeEach(() => {
    product = new Product();
  });

  it('debería estar definido', () => {
    expect(product).toBeDefined();
  });

  it('debería tener una propiedad id', () => {
    product.id = 1;
    expect(product.id).toBe(1);
  });

  it('debería tener una propiedad name', () => {
    product.name = 'Producto1';
    expect(product.name).toBe('Producto1');
  });

  it('debería tener una propiedad description', () => {
    product.description = 'Descripcion';
    expect(product.description).toBe('Descripcion');
  });

  it('debería tener una propiedad price', () => {
    product.price = 1000;
    expect(product.price).toBe(1000);
  });

  it('debería tener una propiedad stock', () => {
    product.stock = 10;
    expect(product.stock).toBe(10);
  });

  it('debería tener una propiedad image', () => {
    product.image = 'image.png';
    expect(product.image).toBe('image.png');
  });

  it('debería tener una propiedad categories', () => {
    const category1 = new Category();
    const category2 = new Category();
    product.categories = [category1, category2];
    expect(product.categories).toEqual([category1, category2]);
  });
});


