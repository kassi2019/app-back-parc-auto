import { Injectable } from '@nestjs/common';
import { CreateModePaiementDto } from './dto/create-mode-paiement.dto';
import { UpdateModePaiementDto } from './dto/update-mode-paiement.dto';

@Injectable()
export class ModePaiementsService {
  create(createModePaiementDto: CreateModePaiementDto) {
    return 'This action adds a new modePaiement';
  }

  findAll() {
    return `This action returns all modePaiements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modePaiement`;
  }

  update(id: number, updateModePaiementDto: UpdateModePaiementDto) {
    return `This action updates a #${id} modePaiement`;
  }

  remove(id: number) {
    return `This action removes a #${id} modePaiement`;
  }
}
