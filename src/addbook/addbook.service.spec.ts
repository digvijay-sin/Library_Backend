import { Test, TestingModule } from '@nestjs/testing';
import { AddbookService } from './addbook.service';

describe('AddbookService', () => {
  let service: AddbookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddbookService],
    }).compile();

    service = module.get<AddbookService>(AddbookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
