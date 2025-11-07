import { Module } from '@nestjs/common';
import { TypeClientService } from './type-client.service';
import { TypeClientController } from './type-client.controller';

@Module({
  controllers: [TypeClientController],
  providers: [TypeClientService],
})
export class TypeClientModule {}
