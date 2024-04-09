import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";
import { CreateProductDto } from "../../../products/dtos/products.dtos";

describe('CreateProductDto', () => {
  it('should createProductDto be defined', () => {
    expect(CreateProductDto).toBeDefined();
  });
  it('should createProductDto have name, description, price, stock, image, and categoriesIds properties', () => {
    const createProduct = new CreateProductDto();
    expect('name' in createProduct).toBe(true);
    expect('description' in createProduct).toBe(true);
    expect('price' in createProduct).toBe(true);
    expect('stock' in createProduct).toBe(true);
    expect('image' in createProduct).toBe(true);
    expect('categoriesIds' in createProduct).toBe(true);
  });
  it('should createProductDto have validations for name, description, price, stock, image, and categoriesIds', () => {
    const createProduct = new CreateProductDto();
    expect(createProduct.name).toBeInstanceOf(IsString);
    expect(createProduct.name).toBeInstanceOf(IsNotEmpty);
    expect(createProduct.description).toBeInstanceOf(IsString);
    expect(createProduct.description).toBeInstanceOf(IsNotEmpty);
    expect(createProduct.price).toBeInstanceOf(IsNumber);
    expect(createProduct.price).toBeInstanceOf(IsNotEmpty);
    expect(createProduct.price).toBeInstanceOf(IsPositive);
    expect(createProduct.stock).toBeInstanceOf(IsNumber);
    expect(createProduct.stock).toBeInstanceOf(IsNotEmpty);
    expect(createProduct.image).toBeInstanceOf(IsUrl);
    expect(createProduct.image).toBeInstanceOf(IsNotEmpty);
    expect(createProduct.categoriesIds).toBeInstanceOf(IsArray);
    expect(createProduct.categoriesIds).toBeInstanceOf(IsNotEmpty);
  });
});
