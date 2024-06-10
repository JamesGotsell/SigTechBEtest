import { Controller, Post, Body } from '@nestjs/common';
import { QuantService } from './quant.service';
import { CreateQuantRequestDto } from './dto/create-quant-request.dto';
import { CreateQuantDto } from './dto/create-quant.dto';

@Controller('quant')
export class QuantController {
  constructor(private readonly quantService: QuantService) {}

  @Post()
  createQuantRequest(@Body() createQuantDto: CreateQuantRequestDto) {
    return this.quantService.createQuantRequest(createQuantDto);
  }
  @Post('/create')
  createQuant(@Body() createQuantDto: CreateQuantDto) {
    return this.quantService.createQuant(createQuantDto);
  }

  // @Get()
  // getQuantdata(@Body() createQuantDto: CreateQuantDto) {
  //   return this.quantService.createQuantRequest(createQuantDto);
  // }
}
