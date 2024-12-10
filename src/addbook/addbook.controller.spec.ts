import { Test, TestingModule } from '@nestjs/testing';
import { AddbookController } from './addbook.controller';

describe('AddbookController', () => {
  let controller: AddbookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddbookController],
    }).compile();

    controller = module.get<AddbookController>(AddbookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
