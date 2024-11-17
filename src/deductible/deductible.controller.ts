import { Controller, Body, Post } from '@nestjs/common';
import { DeductibleService } from './deductible.service';
import { CreateDeductibleDto } from './interfaces/create-deductible.dto';
import { RequestDto } from './interfaces/request.dto';

@Controller('deductible')
export class DeductibleController {
  constructor(private readonly deductibleService: DeductibleService) {}

  @Post()
  create(@Body() request: RequestDto) {
    const payload = request.payload;
    return this.deductibleService.create(payload as CreateDeductibleDto);
  }
}
