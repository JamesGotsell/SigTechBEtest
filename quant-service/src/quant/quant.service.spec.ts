import { Test, TestingModule } from '@nestjs/testing';
import { QuantService } from './quant.service';

describe('QuantService', () => {
  let service: QuantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuantService],
    }).compile();

    service = module.get<QuantService>(QuantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
