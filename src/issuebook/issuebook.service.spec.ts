import { Test, TestingModule } from '@nestjs/testing';
import { IssuebookService } from './issuebook.service';

describe('IssuebookService', () => {
  let service: IssuebookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssuebookService],
    }).compile();

    service = module.get<IssuebookService>(IssuebookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
