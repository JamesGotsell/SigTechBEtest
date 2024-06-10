import { Module } from '@nestjs/common';
import { QuantDataRequestService } from './QuantDataRequestService';

@Module({
  providers: [QuantDataRequestService],
  exports: [QuantDataRequestService],
})
export class QueueModule {}
