import { Module } from '@nestjs/common';
import { CarburantsService } from './carburants.service';
import { CarburantsController } from './carburants.controller';

@Module({
  controllers: [CarburantsController],
  providers: [CarburantsService],
})
export class CarburantsModule {}
