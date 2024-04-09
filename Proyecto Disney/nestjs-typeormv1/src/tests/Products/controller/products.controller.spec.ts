import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../../../products/controllers/products.controller';
import { ProductsService } from '../../../products/services/products.service';
import { of } from 'rxjs';
import { CreateProductDto, UpdateProductDto } from 'src/products/dtos/products.dtos';
import { Product } from '../entity/product.entity.spec';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            findAll: jest.fn(() => of([new Product()])),
            findOne: jest.fn(() => of(new Product())),
            create: jest.fn(() => of(new Product())),
            update: jest.fn(() => of(new Product())),
            remove: jest.fn(() => of(new Product())),
          },
        },
      ],
    }).compile();

    productsController = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productsController).toBeDefined();
  });

  describe('getProducts', () => {
    it('should return a list of products', async (done) => {
      const response = await productsController.getProducts(10, 1, 'test');
      expect(response).toEqual([new Product()]);
      done();
    });
  });


  describe('getProductFilter', () => {
    it('should return a message', async () => {
      const response = await productsController.getProductFilter();
      expect(response).toEqual('yo soy un filter');
    });
  });

  describe('getOne', () => {
    it('should return a product', async () => {
      const productId = 1;
      const response = await productsController.getOne(productId);
      expect(response).toEqual(new Product());
    });
  });

  describe('create', () => {
    it('should return a created product', async () => {
      const payload = new CreateProductDto();
      const response = await productsController.create(payload);
      expect(response).toEqual(new Product());
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const id = 1;
      const payload = new UpdateProductDto();
      const response = await productsController.update(id, payload);
      expect(response).toEqual(new Product());
    });
  });

  describe('delete', () => {
    it('should delete a product', async () => {
      const id = 1;
      const response = await productsController.delete(id);
      expect(response).toEqual(new Product());
    });
  });

});


