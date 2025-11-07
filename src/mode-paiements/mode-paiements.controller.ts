import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModePaiementsService } from './mode-paiements.service';
import { CreateModePaiementDto } from './dto/create-mode-paiement.dto';
import { UpdateModePaiementDto } from './dto/update-mode-paiement.dto';

@Controller('mode-paiements')
export class ModePaiementsController {
  constructor(private readonly modePaiementsService: ModePaiementsService) {}

  @Post()
  create(@Body() createModePaiementDto: CreateModePaiementDto) {
    return this.modePaiementsService.create(createModePaiementDto);
  }

  @Get()
  findAll() {
    return this.modePaiementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modePaiementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModePaiementDto: UpdateModePaiementDto) {
    return this.modePaiementsService.update(+id, updateModePaiementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modePaiementsService.remove(+id);
  }
}
