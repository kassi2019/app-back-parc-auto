import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarburantsService } from './carburants.service';
import { CreateCarburantDto } from './dto/create-carburant.dto';
import { UpdateCarburantDto } from './dto/update-carburant.dto';

@Controller('carburants')
export class CarburantsController {
  constructor(private readonly carburantsService: CarburantsService) {}

  @Post()
  create(@Body() createCarburantDto: CreateCarburantDto) {
    return this.carburantsService.create(createCarburantDto);
  }

  @Get()
  findAll() {
    return this.carburantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carburantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarburantDto: UpdateCarburantDto) {
    return this.carburantsService.update(+id, updateCarburantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carburantsService.remove(+id);
  }
}
