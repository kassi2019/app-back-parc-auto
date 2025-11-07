import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeClientService } from './type-client.service';
import { CreateTypeClientDto } from './dto/create-type-client.dto';
import { UpdateTypeClientDto } from './dto/update-type-client.dto';

@Controller('type-client')
export class TypeClientController {
  constructor(private readonly typeClientService: TypeClientService) {}

  @Post()
  create(@Body() createTypeClientDto: CreateTypeClientDto) {
    return this.typeClientService.create(createTypeClientDto);
  }

  @Get()
  findAll() {
    return this.typeClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeClientDto: UpdateTypeClientDto) {
    return this.typeClientService.update(+id, updateTypeClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeClientService.remove(+id);
  }
}
