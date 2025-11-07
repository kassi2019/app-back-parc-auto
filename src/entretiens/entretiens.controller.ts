import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntretiensService } from './entretiens.service';
import { CreateEntretienDto } from './dto/create-entretien.dto';
import { UpdateEntretienDto } from './dto/update-entretien.dto';

@Controller('entretiens')
export class EntretiensController {
  constructor(private readonly entretiensService: EntretiensService) {}

  @Post()
  create(@Body() createEntretienDto: CreateEntretienDto) {
    return this.entretiensService.create(createEntretienDto);
  }

  @Get()
  findAll() {
    return this.entretiensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entretiensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntretienDto: UpdateEntretienDto) {
    return this.entretiensService.update(+id, updateEntretienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entretiensService.remove(+id);
  }
}
