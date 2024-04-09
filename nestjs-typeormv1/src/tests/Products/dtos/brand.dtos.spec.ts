import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { CreateBrandDto, UpdateBrandDto } from '../../../products/dtos/brand.dtos';

describe('Brand DTOs', () => {
  it('should createBrandDto be defined', () => {
    expect(CreateBrandDto).toBeDefined();
  });
  it('should createBrandDto have name and image properties', () => {
    const createBrand = new CreateBrandDto();
    expect('name' in createBrand).toBe(true);
    expect('image' in createBrand).toBe(true);
  });
  it('should createBrandDto have validations for name and image', () => {
    const createBrand = new CreateBrandDto();
    expect(createBrand.name).toBeInstanceOf(IsString);
    expect(createBrand.name).toBeInstanceOf(IsNotEmpty);
    expect(createBrand.image).toBeInstanceOf(IsUrl);
    expect(createBrand.image).toBeInstanceOf(IsNotEmpty);
  });

  it('should updateBrandDto be defined', () => {
    expect(UpdateBrandDto).toBeDefined();
  });
  it('should updateBrandDto extend from createBrandDto', () => {
    const updateBrand: Partial<CreateBrandDto> = { name: 'Brand X' };
    expect(updateBrand).toBeInstanceOf(PartialType);
    expect(updateBrand.constructor.name).toBe('UpdateBrandDto');
    expect('prototype' in updateBrand).toBe(false);
  });
});



