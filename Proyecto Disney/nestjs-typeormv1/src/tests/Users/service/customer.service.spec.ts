import { NotFoundException } from "@nestjs/common";
import { TestingModule, Test } from "@nestjs/testing";
import { Repository } from "typeorm";
import { CustomersService } from "../../../users/services/customers.service";

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersService,
        {
          provide: Repository,
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should throw a NotFoundException if customer with id does not exist', () => {
      const mockId = 1;
      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      expect(service.findOne(mockId)).rejects.toThrow(NotFoundException);
      expect(service.findOne).toHaveBeenCalledTimes(1);
      expect(service.findOne).toHaveBeenCalledWith(mockId);
    });
  });
});
