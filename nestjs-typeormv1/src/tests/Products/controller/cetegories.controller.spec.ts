import { Test, TestingModule } from "@nestjs/testing";
import { CategoriesController } from "../../../products/controllers/categories.controller";
import { CategoriesService } from "../../../products/services/categories.service";
import { Category } from "src/products/entities/category.entity";
import { DeleteResult } from "typeorm";
import { UpdateCategoryDto } from "src/products/dtos/category.dtos";

describe('CategoriesController', () => {
  let controller: CategoriesController;
  let categoriesService: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        {
          provide: CategoriesService,
          useValue: {
            findAll: jest.fn(() => []),
            findOne: jest.fn(() => ({} as Category)),
            create: jest.fn((dto: Category) => ({ ...dto, createAt: new Date(), updateAt: new Date(), products: [] })),
            update: jest.fn().mockImplementation((id: number, dto: Category) => ({ id, ...dto })),
            remove: jest.fn().mockResolvedValue({ affected: 1 }), // Simulamos que remove devuelve un objeto DeleteResult
          },
        },
      ],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
    categoriesService = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of categories', async () => {
    const result: Category[] = [{} as Category];
    jest.spyOn(categoriesService, 'findAll').mockResolvedValue(result);

    expect(await controller.findAll()).toEqual(result);
  });

  it('should return a category', async () => {
    const result: Category = {} as Category;
    jest.spyOn(categoriesService, 'findOne').mockResolvedValue(result);

    expect(await controller.get(1)).toEqual(result);
  });

  it('should create a category', async () => {
    const dto: Category = {
      id: 1, name: 'test',
      createAt: undefined,
      updateAt: undefined,
      products: []
    };
    expect(await controller.create(dto)).toEqual({...dto, createAt: expect.any(Date), updateAt: expect.any(Date), products: [] });
  });

  it('should update a category', async () => {
    const dto: UpdateCategoryDto = {
      name: 'test',
      prototype: undefined
    };
    expect(await controller.update(1, dto)).toEqual({id: 1, name: 'test'});
  });

  it('should remove a category', async () => {
    const id: number = 1;
    const deleteResult: DeleteResult = {
      affected: 1,
      raw: [],
    };
    jest.spyOn(categoriesService, 'remove').mockResolvedValue(deleteResult);

    expect(await controller.remove(id)).toStrictEqual({
      affected: id,
      raw: [],
    });
    });
});

