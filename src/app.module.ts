import { Module } from '@nestjs/common';
import { DeductibleModule } from './deductible/deductible.module';

@Module({
  imports: [DeductibleModule],
})
export class AppModule {}
