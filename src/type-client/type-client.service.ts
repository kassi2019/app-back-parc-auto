import { Injectable } from '@nestjs/common';
import { CreateTypeClientDto } from './dto/create-type-client.dto';
import { UpdateTypeClientDto } from './dto/update-type-client.dto';

@Injectable()
export class TypeClientService {
  create(createTypeClientDto: CreateTypeClientDto) {
    return 'This action adds a new typeClient';
  }

  findAll() {
    return `This action returns all typeClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeClient`;
  }

  update(id: number, updateTypeClientDto: UpdateTypeClientDto) {
    return `This action updates a #${id} typeClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeClient`;
  }
}
