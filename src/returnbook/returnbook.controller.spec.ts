import { Test, TestingModule } from '@nestjs/testing';
import { ReturnbookController } from './returnbook.controller';

describe('ReturnbookController', () => {
  let controller: ReturnbookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnbookController],
    }).compile();

    controller = module.get<ReturnbookController>(ReturnbookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
