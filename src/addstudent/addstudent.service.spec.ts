import { Test, TestingModule } from '@nestjs/testing';
import { AddstudentService } from './addstudent.service';

describe('AddstudentService', () => {
  let service: AddstudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddstudentService],
    }).compile();

    service = module.get<AddstudentService>(AddstudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
