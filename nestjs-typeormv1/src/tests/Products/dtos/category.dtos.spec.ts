import { IsNotEmpty, IsString } from "class-validator";
import { CreateCategoryDto, UpdateCategoryDto } from "../../../products/dtos/category.dtos";
import { PartialType } from "@nestjs/swagger";

describe('Category DTOs', () => {
  it('should createCategoryDto be defined', () => {
    expect(CreateCategoryDto).toBeDefined();
  });
  it('should createCategoryDto have name property', () => {
    const createCategory = new CreateCategoryDto();
    expect('name' in createCategory).toBe(true);
  });
  it('should createCategoryDto have validations for name property', () => {
    const createCategory = new CreateCategoryDto();
    expect(createCategory.name).toBeInstanceOf(IsString);
    expect(createCategory.name).toBeInstanceOf(IsNotEmpty);
  });

  it('should updateCategoryDto be defined', () => {
    expect(UpdateCategoryDto).toBeDefined();
  });
  it('should updateCategoryDto extend from createCategoryDto', () => {
    const updateCategory = new UpdateCategoryDto();
    expect(updateCategory).toBeInstanceOf(PartialType);
    expect(updateCategory.constructor.name).toBe('UpdateCategoryDto');
    expect(updateCategory.prototype.constructor.name).toBe('CreateCategoryDto');
  });
});
