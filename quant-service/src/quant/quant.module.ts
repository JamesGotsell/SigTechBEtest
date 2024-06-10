import { Module } from '@nestjs/common';
import { QuantService } from './quant.service';
import { QuantController } from './quant.controller';
import { quantProviders } from './quant.providers';
import { QuantDataRequestService } from 'src/queues/QuantDataRequestService';

@Module({
  controllers: [QuantController],
  providers: [QuantDataRequestService, QuantService, ...quantProviders],
})
export class QuantModule {}
