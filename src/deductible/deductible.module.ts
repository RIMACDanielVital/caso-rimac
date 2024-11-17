import { Module } from '@nestjs/common';
import { DeductibleService } from './deductible.service';
import { DeductibleController } from './deductible.controller';

@Module({
  controllers: [DeductibleController],
  providers: [DeductibleService],
})
export class DeductibleModule {}
