import { Injectable } from '@nestjs/common';
import { CreateCarburantDto } from './dto/create-carburant.dto';
import { UpdateCarburantDto } from './dto/update-carburant.dto';

@Injectable()
export class CarburantsService {
  create(createCarburantDto: CreateCarburantDto) {
    return 'This action adds a new carburant';
  }

  findAll() {
    return `This action returns all carburants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carburant`;
  }

  update(id: number, updateCarburantDto: UpdateCarburantDto) {
    return `This action updates a #${id} carburant`;
  }

  remove(id: number) {
    return `This action removes a #${id} carburant`;
  }
}
