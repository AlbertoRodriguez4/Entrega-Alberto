import { TestingModule, Test } from "@nestjs/testing";
import { CreateUserDto } from "../../../users/dtos/user.dto";
import { UsersService } from "../../../users/services/users.service";
import { UsersController } from "../../../users/controllers/users.controller";

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn(() => []),
            findOne: jest.fn((id) => ({ id })),
            getOrderByUser: jest.fn(() => []),
            create: jest.fn((dto: CreateUserDto) => ({ id: 1, ...dto })),
            update: jest.fn().mockImplementation((id, payload) => {
              return { id, ...payload };
            }),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  it('findAll should be equal to users service findAll', async () => {
    expect(usersController.findAll()).toEqual(await usersService.findAll());
  });

  it('get should be equal to users service findOne', async () => {
    const mockId = 1;
    expect(await usersController.get(mockId)).toEqual(
      await usersService.findOne(mockId),
    );
  });

  it('getOrders should be equal to users service getOrderByUser', async () => {
    const mockId = 1;
    expect(await usersController.getOrders(mockId)).toEqual(
      await usersService.getOrderByUser(mockId),
    );
  });

  it('create should return a user with an id', async () => {
    const mockUser: CreateUserDto = {
      password: '123456',
      email: 'test@mail.com',
      role: 'customer',
      customerId: 1,
    };
    const user = await usersController.create(mockUser);
    expect(user.id).toBeDefined();
  });


  it('update should be equal to users service update', async () => {
    const mockUser = { username: 'test', password: '123456' };
    const mockId = 1;
    expect(await usersController.update(mockId, mockUser)).toEqual(
      await usersService.update(mockId, mockUser),
    );
  });

  it('remove should be equal to users service remove', async () => {
    const mockId = 1;
    expect(await usersController.remove(mockId)).toEqual(
      await usersService.remove(mockId),
    );
  });
});
