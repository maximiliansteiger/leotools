import { Module } from '@nestjs/common';
import { EquipmentTypeService } from './equipment-type.service';
import { EquipmentTypeController } from './equipment-type.controller';

@Module({
  controllers: [EquipmentTypeController],
  providers: [EquipmentTypeService]
})
export class EquipmentTypeModule {}
