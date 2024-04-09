import { Test } from "@nestjs/testing";
import { TestingModule } from "@nestjs/testing/testing-module";
import { DatabaseModule } from "../../database/database.module";

describe('DatabaseModule', () => {
  let database: DatabaseModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
    }).compile();

    database = module.get<DatabaseModule>(DatabaseModule);
  });

  it('should be defined', () => {
    expect(database).toBeDefined();
  });
});

