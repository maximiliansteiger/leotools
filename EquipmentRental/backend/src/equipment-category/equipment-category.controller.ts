import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipmentCategoryService } from './equipment-category.service';
import { CreateEquipmentCategoryDto } from './dto/create-equipment-category.dto';
import { UpdateEquipmentCategoryDto } from './dto/update-equipment-category.dto';

@Controller('equipment-category')
export class EquipmentCategoryController {
  constructor(private readonly equipmentCategoryService: EquipmentCategoryService) {}

  @Post()
  create(@Body() createEquipmentCategoryDto: CreateEquipmentCategoryDto) {
    return this.equipmentCategoryService.create(createEquipmentCategoryDto);
  }

  @Get()
  findAll() {
    return this.equipmentCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentCategoryDto: UpdateEquipmentCategoryDto) {
    return this.equipmentCategoryService.update(+id, updateEquipmentCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentCategoryService.remove(+id);
  }
}
