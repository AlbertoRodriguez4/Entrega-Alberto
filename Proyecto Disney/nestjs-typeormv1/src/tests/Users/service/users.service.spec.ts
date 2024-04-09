import { ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "../../../users/dtos/user.dto";
import { User } from "../../../users/entities/user.entity";
import { UsersService } from "../../../users/services/users.service";
import { ProductsService } from "src/products/services/products.service";
import { QueryResult } from "pg";

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        ProductsService,
        ConfigService,
        {
          provide: 'PG',
          useValue: {
            query: jest.fn(),
          },
        },
        {
          provide: 'TASKS',
          useValue: {},
        },
        ConfigService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = [new User()];
      jest.spyOn(repo, 'find').mockResolvedValue(result);

      expect(await service.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      const result = new User();
      jest.spyOn(repo, 'findOne').mockResolvedValue(result);

      expect(await service.findOne(1)).toBe(result);
    });
  });

  describe('create', () => {
    it('should return a user', async () => {
      const result = new User();
      jest.spyOn(repo, 'create').mockReturnValue(result);

      expect(await service.create({} as CreateUserDto)).toBe(result);
    });
  });

  describe('update', () => {
    it('should return a user', async () => {
      const result = new User();
      jest.spyOn(repo, 'merge').mockReturnValue(result);

      expect(await service.update(1, {} as UpdateUserDto)).toBe(result);
    });
  });

  describe('remove', () => {
    it('should return true', async () => {
      jest.spyOn(repo, 'delete').mockResolvedValue({ affected: 1 } as DeleteResult);

      expect(await service.remove(1)).toBe(true);
    });
  });

  describe('getOrderByUser', () => {
    it('should return an order', async () => {
      const user = new User();
      const result = { date: new Date(), user, products: [] };
      jest.spyOn(service, 'findOne').mockResolvedValue(user);
      jest.spyOn(service['productsService'], 'findAll').mockResolvedValue(
        result.products,
      );

      expect(await service.getOrderByUser(1)).toBe(result);
    });
  });


});

