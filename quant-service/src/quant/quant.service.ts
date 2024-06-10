import { Inject, Injectable } from '@nestjs/common';
import { CreateQuantRequestDto } from './dto/create-quant-request.dto';
import { QuantDataRequestService } from '../queues/QuantDataRequestService';
import { Quant } from './entities/quant.entity';
import { CreateQuantDto } from './dto/create-quant.dto';
import uuidApiKey from 'uuid-apikey';

@Injectable()
export class QuantService {
  constructor(
    @Inject('QUANT_REPOSITORY')
    private quantRepository: typeof Quant,
    private quantReqService: QuantDataRequestService,
  ) {}
  async createQuantRequest(createQuantResDto: CreateQuantRequestDto) {
    console.log(createQuantResDto);
    // check if api_key is valid
    const quantUser = this.quantRepository.findOne({
      where: {
        api_key: createQuantResDto.api_key,
      },
    });
    if (!quantUser) {
      throw new Error('not allowed');
    }
    const dataRequest = {
      api_key: createQuantResDto.api_key,

      coin: createQuantResDto.coin,
      interval: createQuantResDto.interval,
    };
    await this.quantReqService.addQauntDataResultToQueue(dataRequest);
    return dataRequest;
  }

  async createQuant(createQuantDto: CreateQuantDto) {
    console.log(createQuantDto, 'quant dto');
    const newQuant = {
      name: createQuantDto.name,
      api_key: uuidApiKey.create().apiKey,
      role: 'quant',
    };
    await this.quantRepository.create(newQuant);
    return 'This action adds a new quant request';
  }
}
