import { Test, TestingModule } from '@nestjs/testing';
import { SujetService } from './sujet.service';

describe('SujetService', () => {
  let service: SujetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SujetService],
    }).compile();

    service = module.get<SujetService>(SujetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
