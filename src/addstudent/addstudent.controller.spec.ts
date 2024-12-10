import { Test, TestingModule } from '@nestjs/testing';
import { AddstudentController } from './addstudent.controller';

describe('AddstudentController', () => {
  let controller: AddstudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddstudentController],
    }).compile();

    controller = module.get<AddstudentController>(AddstudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
