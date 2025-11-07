import { Module } from '@nestjs/common';
import { EntretiensService } from './entretiens.service';
import { EntretiensController } from './entretiens.controller';

@Module({
  controllers: [EntretiensController],
  providers: [EntretiensService],
})
export class EntretiensModule {}
