import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from '../../../products/services/categories.service';
import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../../../products/entities/category.entity';

class MockCategoryRepository {
  find = jest.fn().mockResolvedValue([]);
  findOne = jest.fn().mockResolvedValue(null);
  create = jest.fn();
  save = jest.fn();
  delete = jest.fn();
}

describe('CategoriesService', () => {
  let service: CategoriesService;
  let categoryRepository: MockCategoryRepository; // Usamos el mock personalizado

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        { provide: Repository, useClass: MockCategoryRepository }, // Usamos useClass para utilizar nuestro mock
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    categoryRepository = module.get<MockCategoryRepository>(MockCategoryRepository);

    it('should be defined', () => {
      expect(service).toBeDefined();
    });
    describe('findAll', () => {
      it('should return an array of categories', async () => {
        const result = [new Category()];
        categoryRepository.find.mockResolvedValue(result);
        const categories = await service.findAll();
        expect(categoryRepository.find).toHaveBeenCalled();
        expect(categories).toEqual(result);
      });
    });

    describe('findOne', () => {
      it('should return a category if found', async () => {
        const result = new Category();
        categoryRepository.findOne.mockResolvedValue(result);
        const category = await service.findOne(1);
        expect(categoryRepository.findOne).toHaveBeenCalledWith(1);
        expect(category).toEqual(result);
      });

      it('should throw an exception if category not found', async () => {
        categoryRepository.findOne.mockResolvedValue(null);
        expect(service.findOne(1)).rejects.toThrow(NotFoundException);
      });
    });

    describe('create', () => {
      it('should return a new category', async () => {
        const result = new Category();
        categoryRepository.create.mockReturnValue(result);
        const newCategory = { name: 'test name' };
        const createdCategory = await service.create(newCategory);
        expect(categoryRepository.create).toHaveBeenCalledWith(newCategory);
        expect(categoryRepository.save).toHaveBeenCalledWith(result);
        expect(createdCategory).toEqual(result);
      });
    });

    describe('update', () => {
      it('should return an updated category', async () => {
        const result = new Category();
        const updateCategory = { name: 'test name' };
        categoryRepository.findOne.mockResolvedValue(result);
        categoryRepository.save.mockResolvedValue(updateCategory);
        const updatedCategory = await service.update(1, { ...updateCategory, prototype: undefined });
        expect(categoryRepository.findOne).toHaveBeenCalledWith(1);
        expect(categoryRepository.save).toHaveBeenCalledWith(result);
        expect(updatedCategory).toEqual(updateCategory);
      });

      it('should throw an exception if category not found', async () => {
        categoryRepository.findOne.mockResolvedValue(null);
        expect(service.update(1, {
          prototype: undefined
        })).rejects.toThrow(NotFoundException);
      });
    });

    describe('remove', () => {
      it('should return a deleted category', async () => {
        const result = new Category();
        categoryRepository.findOne.mockResolvedValue(result);
        categoryRepository.delete.mockResolvedValue(result);
        const deletedCategory = await service.remove(1);
        expect(categoryRepository.findOne).toHaveBeenCalledWith(1);
        expect(categoryRepository.delete).toHaveBeenCalledWith(result);
        expect(deletedCategory).toEqual(result);
      });

      it('should throw an exception if category not found', async () => {
        categoryRepository.findOne.mockResolvedValue(null);
        expect(service.remove(1)).rejects.toThrow(NotFoundException);
      });
    });
  });

  afterEach(() => {
    jest.resetAllMocks();

  });


}
)
