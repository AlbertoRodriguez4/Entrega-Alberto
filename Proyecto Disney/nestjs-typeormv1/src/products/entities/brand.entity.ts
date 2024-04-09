import { Category } from "./category.entity";

export class Brand {
  categories(categories: any): void {
    this.categoriesIds = categories.map((item: Category) => item.id);
  }
  id: number;
  name: string;
  image: string;
  categoriesIds: number[];
}


