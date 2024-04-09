import { Test, TestingModule } from '@nestjs/testing';

import { ProductsController } from '../../products/controllers/products.controller';
import { BrandsController } from '../../products/controllers/brands.controller';
import { CategoriesController } from '../../products/controllers/categories.controller';
import { ProductsService } from '../../products/services/products.service';
import { BrandsService } from '../../products/services/brands.service';
import { CategoriesService } from '../../products/services/categories.service';
import { Product } from '../../products/entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../../products/entities/category.entity';
import { ProductsModule } from '../../products/products.module';

describe('ProductsModule', () => {
  let productsModule: ProductsModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Product, Category])],
      controllers: [ProductsController, CategoriesController, BrandsController],
      providers: [ProductsService, BrandsService, CategoriesService],
      exports: [ProductsService],
    }).compile();

    productsModule = module.get<ProductsModule>(ProductsModule);
  });

  it('should be defined', () => {
    expect(productsModule).toBeDefined();
  });
});
