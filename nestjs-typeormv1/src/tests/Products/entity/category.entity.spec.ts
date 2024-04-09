import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "../../../products/entities/product.entity";
import { Category } from "../../../products/entities/category.entity";

describe('Category', () => {
  let category: Category;

  beforeEach(() => {
    category = new Category();
  });

  it('debería estar definida', () => {
    expect(category).toBeDefined();
  });

  it('debería tener una propiedad id', () => {
    category.id = 1;
    expect(category.id).toBe(1);
  });

  it('debería tener una propiedad name', () => {
    category.name = 'Categoria1';
    expect(category.name).toBe('Categoria1');
  });

  it('debería tener una propiedad createAt', () => {
    const fecha = new Date();
    category.createAt = fecha;
    expect(category.createAt).toBe(fecha);
  });

  it('debería tener una propiedad updateAt', () => {
    const fecha = new Date();
    category.updateAt = fecha;
    expect(category.updateAt).toBe(fecha);
  });

  it('debería tener una propiedad products', () => {
    const product1 = new Product();
    const product2 = new Product();
    category.products = [product1, product2];
    expect(category.products).toEqual([product1, product2]);
  });
});
