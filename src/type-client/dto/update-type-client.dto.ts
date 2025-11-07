import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeClientDto } from './create-type-client.dto';

export class UpdateTypeClientDto extends PartialType(CreateTypeClientDto) {}
