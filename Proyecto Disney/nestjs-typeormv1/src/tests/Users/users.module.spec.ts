import { Test } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsModule } from "src/products/products.module";
import { CustomerController } from "../../users/controllers/customers.controller";
import { UsersController } from "../../users/controllers/users.controller";
import { Customer } from "../../users/entities/customer.entity";
import { User } from "../../users/entities/user.entity";
import { CustomersService } from "../../users/services/customers.service";
import { UsersService } from "../../users/services/users.service";

describe('UsersModule', () => {
  let usersModule: any;

  beforeEach(async () => {
    usersModule = await Test.createTestingModule({
      imports: [ProductsModule, TypeOrmModule.forFeature([User, Customer])],
      controllers: [CustomerController, UsersController],
      providers: [CustomersService, UsersService],
    }).compile();
  });

  it('should be defined', () => {
    expect(usersModule).toBeDefined();
  });
});

