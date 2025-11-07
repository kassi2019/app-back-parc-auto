import { Module } from '@nestjs/common';
import { ModePaiementsService } from './mode-paiements.service';
import { ModePaiementsController } from './mode-paiements.controller';

@Module({
  controllers: [ModePaiementsController],
  providers: [ModePaiementsService],
})
export class ModePaiementsModule {}
