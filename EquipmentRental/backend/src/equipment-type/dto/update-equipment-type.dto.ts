import { PartialType } from '@nestjs/swagger';
import { CreateEquipmentTypeDto } from './create-equipment-type.dto';

export class UpdateEquipmentTypeDto extends PartialType(CreateEquipmentTypeDto) {}
