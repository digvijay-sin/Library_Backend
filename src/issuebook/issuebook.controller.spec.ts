import { Test, TestingModule } from '@nestjs/testing';
import { IssuebookController } from './issuebook.controller';

describe('IssuebookController', () => {
  let controller: IssuebookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssuebookController],
    }).compile();

    controller = module.get<IssuebookController>(IssuebookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
