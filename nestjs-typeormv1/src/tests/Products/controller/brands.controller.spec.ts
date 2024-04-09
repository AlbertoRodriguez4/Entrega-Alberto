import { Test, TestingModule } from '@nestjs/testing';
import { BrandsController } from '../../../products/controllers/brands.controller';
import { BrandsService } from '../../../products/services/brands.service';
import { Brand } from 'src/products/entities/brand.entity';

describe('BrandsController', () => {
  let brandsController: BrandsController;
  let brandsService: BrandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandsController],
      providers: [
        {
          provide: BrandsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue(undefined),
            create: jest.fn().mockImplementation(payload => Promise.resolve({
              id: Math.random() * 1000,
              ...payload,
            })),
            update: jest.fn().mockImplementation((id, payload) => Promise.resolve({
              id,
              ...payload,
              image: undefined,
              categories: [],
            })),
            remove: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    brandsController = module.get<BrandsController>(BrandsController);
    brandsService = module.get<BrandsService>(BrandsService);
  });

  it('should be defined', () => {
    expect(brandsController).toBeDefined();
  });

  it('findAll should return an array of brands', async () => {
    const result = await brandsController.findAll();
    expect(result).toEqual([]);
    expect(brandsService.findAll).toHaveBeenCalled();
  });

  it('findOne should return a brand', async () => {
    const result = await brandsController.get(1);
    expect(result).toBeUndefined();
    expect(brandsService.findOne).toHaveBeenCalledWith(1);
  });

  it('create should return a brand', async () => {
    const payload = {
      name: 'test',
      image: 'asdf',
    };
    const result = await brandsController.create(payload);
    expect(result.id).toBeGreaterThan(0);
    expect(result.name).toEqual(payload.name);
    expect(brandsService.create).toHaveBeenCalledWith(payload);
  });

  it('update should return a brand', async () => {
    const id = 1;
    const payload = { name: 'test update' };
    const result = await brandsController.update(id, {...payload, prototype: undefined});
    expect(result.id).toEqual(id);
    expect(result.name).toEqual(payload.name);
    expect(result.image).toBeUndefined();
    expect(result.categories).toEqual([]);
    expect(brandsService.update).toHaveBeenCalledWith(id, payload);
  });

  it('remove should return true', async () => {
    const id = 1;
    const result = await brandsController.remove(id);
    expect(result).toEqual(true);
    expect(brandsService.remove).toHaveBeenCalledWith(id);
  });
});

