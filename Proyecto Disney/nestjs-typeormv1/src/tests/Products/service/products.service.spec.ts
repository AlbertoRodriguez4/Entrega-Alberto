import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../../../products/services/products.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../../../products/entities/product.entity';
import { Category } from '../../../products/entities/category.entity';

describe('ProductsService', () => {
  let service: ProductsService;
  let productRepository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Category),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    productRepository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#findAll', () => {
    it('should return an array of products', async () => {
      const result = [
        {
          id: 1,
          name: 'product1',
          description: 'descr1',
          price: 10,
          stock: 10,
          ProductCategories: [],
          
        },
      ];
      jest.spyOn(productRepository, 'find').mockResolvedValue(result.map(p => ({ ...p, image: '', categories: [] } as Product)));

      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('#findOne', () => {
    it('should return an product by id', async () => {
      const product = {
        id: 1,
        name: 'product1',
        description: 'descr1',
        price: 10,
        stock: 10,
      };
      jest.spyOn(productRepository, 'findOne').mockResolvedValue({ ...product, image: '', categories: [] } as Product);

      expect(await service.findOne(1)).toEqual(product);
    });

    it('should throw an error if product not found', async () => {
      jest.spyOn(productRepository, 'findOne').mockResolvedValue(null);

      expect.assertions(1);
      await expect(service.findOne(1)).rejects.toThrow('Product #1 not found');
    });
  });
});

