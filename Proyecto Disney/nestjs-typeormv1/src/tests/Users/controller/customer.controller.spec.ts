import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from '../../../users/services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../../../users/dtos/customer.dto';
import { CustomerController } from 'src/users/controllers/customers.controller';

describe('CustomerController', () => {
  let customerController: CustomerController;
  let customersService: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        {
          provide: CustomersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                id: 1,
                name: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com',
              },
            ]),
            findOne: jest.fn().mockResolvedValue({
              id: 1,
              name: 'John',
              lastName: 'Doe',
              email: 'johndoe@gmail.com',
            }),
            create: jest.fn().mockImplementation((dto) => ({
              id: 1,
              ...dto,
            })),
            update: jest.fn().mockImplementation((id, dto) => ({
              id,
              ...dto,
            })),
            remove: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    customerController = module.get<CustomerController>(CustomerController);
    customersService = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(customerController).toBeDefined();
  });

  it('findAll customers', async () => {
    const result = await customerController.findAll();
    expect(result).toEqual(await customersService.findAll());
  });

  it('findOne customer', async () => {
    const id = 1;
    const result = await customerController.get(id);
    expect(result).toEqual(await customersService.findOne(id));
  });

  it('create customer', async () => {
    const payload: Omit<CreateCustomerDto, 'id'> = {
      name: 'Johnny',
      lastName: 'Doo',
      phone: ''
    };
    const result = await customerController.create(payload);
    expect(result).toEqual(await customersService.create(payload));
  });

  it('update customer', async () => {
    const id = 1;
    const payload: UpdateCustomerDto = {
      name: 'Jane',
      lastName: 'Doe',
    };
    const result = await customerController.update(id, payload);
    expect(result).toEqual(await customersService.update(id, payload));
  });

  it('remove customer', async () => {
    const id = 1;
    const result = await customerController.remove(id);
    expect(result).toEqual(await customersService.remove(id));
  });
});

