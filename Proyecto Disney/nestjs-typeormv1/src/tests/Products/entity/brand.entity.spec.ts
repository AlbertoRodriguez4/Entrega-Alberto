import { Brand } from "../../../products/entities/brand.entity";

describe('Brand Entity', () => {
  it('should have id, name, and image properties', () => {
    const brand = new Brand();
    expect('id' in brand).toBe(true);
    expect('name' in brand).toBe(true);
    expect('image' in brand).toBe(true);
  });
});
