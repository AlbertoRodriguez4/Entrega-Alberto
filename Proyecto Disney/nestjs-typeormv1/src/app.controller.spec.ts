import { Test, TestingModule } from '@nestjs/testing';
import { Client } from 'pg';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const clientePG = {
        query: jest.fn(),
      };
      const tasks = [];
      const configService = {
        get: jest.fn().mockReturnValue({
          apiKey: '123456',
          database: {
            name: 'database_test',
          },
          postgres: {
            dbName: 'DB',
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: '123456',
          },
        }),
      };
      const appService = new AppService(
        clientePG as unknown as Client,
        tasks,
        configService as any,
      );
      expect(appService.getHello()).toBe('Hello World!');
    });
  });
});
