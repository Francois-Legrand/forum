import { Test, TestingModule } from '@nestjs/testing';
import { SujetController } from './sujet.controller';

describe('SujetController', () => {
  let controller: SujetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SujetController],
    }).compile();

    controller = module.get<SujetController>(SujetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
