import { Module } from '@nestjs/common';
import { EquipmentCategoryService } from './equipment-category.service';
import { EquipmentCategoryController } from './equipment-category.controller';

@Module({
  controllers: [EquipmentCategoryController],
  providers: [EquipmentCategoryService]
})
export class EquipmentCategoryModule {}
