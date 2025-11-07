import { Injectable } from '@nestjs/common';
import { CreateEntretienDto } from './dto/create-entretien.dto';
import { UpdateEntretienDto } from './dto/update-entretien.dto';

@Injectable()
export class EntretiensService {
  create(createEntretienDto: CreateEntretienDto) {
    return 'This action adds a new entretien';
  }

  findAll() {
    return `This action returns all entretiens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entretien`;
  }

  update(id: number, updateEntretienDto: UpdateEntretienDto) {
    return `This action updates a #${id} entretien`;
  }

  remove(id: number) {
    return `This action removes a #${id} entretien`;
  }
}
