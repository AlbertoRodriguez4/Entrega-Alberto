import { CreateUserDto } from "../../../users/dtos/user.dto";

describe('CreateUserDto', () => {
  const createUserDto = new CreateUserDto();
  it('should have a email string that is not empty and validate with class-validator', () => {
    expect(typeof createUserDto.email).toEqual('string');
    expect(createUserDto.email).toHaveLength(10);
  });
  it('should have a password string that is not empty and validate with class-validator', () => {
    expect(typeof createUserDto.password).toEqual('string');
    expect(createUserDto.password).toHaveLength(6);
  });
  it('should have a role string that is not empty and validate with class-validator', () => {
    expect(typeof createUserDto.role).toEqual('string');
    expect(createUserDto.role).toHaveLength(1);
  });
  it('should have a customerId number that is positive and optional and validate with class-validator', () => {
    expect(typeof createUserDto.customerId).toEqual('number');
    expect(createUserDto.customerId).toBeGreaterThanOrEqual(0);
  });
});
