import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  prototype: any;
}

describe('Customer DTOs', () => {
  it('should createCustomerDto be defined', () => {
    expect(CreateCustomerDto).toBeDefined();
  });
  it('should createCustomerDto have name, lastName and phone properties', () => {
    const createCustomer = new CreateCustomerDto();
    expect('name' in createCustomer).toBe(true);
    expect('lastName' in createCustomer).toBe(true);
    expect('phone' in createCustomer).toBe(true);
  });
  it('should createCustomerDto have validations for name, lastName and phone', () => {
    const createCustomer = new CreateCustomerDto();
    expect(createCustomer.name).toBeInstanceOf(IsString);
    expect(createCustomer.name).toBeInstanceOf(IsNotEmpty);
    expect(createCustomer.lastName).toBeInstanceOf(IsString);
    expect(createCustomer.lastName).toBeInstanceOf(IsNotEmpty);
    expect(createCustomer.phone).toBeInstanceOf(IsPhoneNumber);
    expect(createCustomer.phone).toBeInstanceOf(IsNotEmpty);
  });

  it('should updateCustomerDto be defined', () => {
    expect(UpdateCustomerDto).toBeDefined();
  });
  it('should updateCustomerDto extend from createCustomerDto', () => {
    const updateCustomer = new UpdateCustomerDto();
    expect(updateCustomer).toBeInstanceOf(PartialType);
    expect(updateCustomer.constructor.name).toBe('UpdateCustomerDto');
    expect(updateCustomer.prototype.constructor.name).toBe('CreateCustomerDto');
  });
});


