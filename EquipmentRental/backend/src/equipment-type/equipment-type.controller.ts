import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipmentTypeService } from './equipment-type.service';
import { CreateEquipmentTypeDto } from './dto/create-equipment-type.dto';
import { UpdateEquipmentTypeDto } from './dto/update-equipment-type.dto';

@Controller('equipmentTypes')
export class EquipmentTypeController {
  constructor(private readonly equipmentTypeService: EquipmentTypeService) {}

  @Post()
  create(@Body() createEquipmentTypeDto: CreateEquipmentTypeDto) {
    return this.equipmentTypeService.create(createEquipmentTypeDto);
  }

  @Get('getAll')
  findAll() {
    return this.equipmentTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentTypeDto: UpdateEquipmentTypeDto) {
    return this.equipmentTypeService.update(+id, updateEquipmentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentTypeService.remove(+id);
  }
}
