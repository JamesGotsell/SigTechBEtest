import { Test, TestingModule } from '@nestjs/testing';
import { QuantController } from './quant.controller';
import { QuantService } from './quant.service';

describe('QuantController', () => {
  let controller: QuantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuantController],
      providers: [QuantService],
    }).compile();

    controller = module.get<QuantController>(QuantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
