import { Controller } from '@nestjs/common';
import { TypeEntretiensService } from './type-entretiens.service';

@Controller('type-entretiens')
export class TypeEntretiensController {
  constructor(private readonly typeEntretiensService: TypeEntretiensService) {}
}
