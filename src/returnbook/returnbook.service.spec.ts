import { Test, TestingModule } from '@nestjs/testing';
import { ReturnbookService } from './returnbook.service';

describe('ReturnbookService', () => {
  let service: ReturnbookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturnbookService],
    }).compile();

    service = module.get<ReturnbookService>(ReturnbookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
