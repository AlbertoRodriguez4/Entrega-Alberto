import { Test, TestingModule } from '@nestjs/testing';
import { BrandsService } from '../../../products/services/brands.service';
import { NotFoundException } from '@nestjs/common';

describe('BrandsService', () => {
  let service: BrandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandsService],
    }).compile();

    service = module.get<BrandsService>(BrandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return an array', async () => {
    const result = service.findAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('findOne should return a brand', async () => {
    const result = service.findOne(1);
    expect(result).toBeDefined();
    expect(result.id).toEqual(1);
  });

  it('findOne should throw 404 error', async () => {
    try {
      await service.findOne(999);
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
      expect(err.message).toEqual(`Brand #999 not found`);
    }
  });

  it('create should return a brand', async () => {
    const beforeCreate = service.findAll();
    const newBrand = service.create({
      name: 'Brand X',
      image: 'https://i.imgur.com/U4iGx1j.jpeg',
    });

    const afterCreate = service.findAll();

    expect(afterCreate.length).toBeGreaterThan(beforeCreate.length);

    expect(newBrand.id).toBeGreaterThan(
      Math.max.apply(
        Math,
        afterCreate.map((brand) => brand.id),
      ),
    );
  });

  it('update should return a brand', async () => {
    const updatedBrand = service.update(1, {
      name: 'Updated brand',
      prototype: undefined
    });

    expect(updatedBrand.name).toEqual('Updated brand');
  });

  it('update should throw 404 error', async () => {
    try {
      await service.update(999, {
        prototype: undefined
      });
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
      expect(err.message).toEqual(`Brand #999 not found`);
    }
  });

  it('remove should return true', async () => {
    const beforeDelete = service.findAll();
    const result = service.remove(1);
    const afterDelete = service.findAll();

    expect(result).toEqual(true);
    expect(afterDelete.length).toEqual(beforeDelete.length - 1);
  });

  it('remove should throw 404 error', async () => {
    try {
      await service.remove(999);
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
      expect(err.message).toEqual(`Brand #999 not found`);
    }
  });
});
