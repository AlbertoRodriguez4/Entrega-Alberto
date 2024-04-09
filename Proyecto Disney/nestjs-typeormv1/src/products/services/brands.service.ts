import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [];

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: number): Brand {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  create(data: CreateBrandDto): Brand {
    const newBrand: Brand = {
      id: this.counterId++,
      name: data.name,
      image: data.image,
      categories: function (categories: any): void {
        throw new Error('Function not implemented.');
      },
      categoriesIds: []
    };
    this.brands.push(newBrand);
    return newBrand;
  }


  update(id: number, changes: UpdateBrandDto): Brand {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((item) => item.id === id);
    const updatedBrand: Brand = {
      id: brand.id,
      name: changes.name || brand.name,
      image: changes.image || brand.image,
      categories: brand.categories,
      categoriesIds: []
    };
    this.brands[index] = updatedBrand;
    return updatedBrand;
  }

  remove(id: number): boolean {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }
}

