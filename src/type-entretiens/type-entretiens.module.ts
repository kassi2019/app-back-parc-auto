import { Module } from '@nestjs/common';
import { TypeEntretiensService } from './type-entretiens.service';
import { TypeEntretiensController } from './type-entretiens.controller';

@Module({
  controllers: [TypeEntretiensController],
  providers: [TypeEntretiensService],
})
export class TypeEntretiensModule {}
