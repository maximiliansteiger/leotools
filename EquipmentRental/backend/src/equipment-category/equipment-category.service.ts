import { Controller, Get, Injectable } from '@nestjs/common';
import { CreateEquipmentCategoryDto } from './dto/create-equipment-category.dto';
import { UpdateEquipmentCategoryDto } from './dto/update-equipment-category.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Controller('equipment-categories')
@Injectable()
export class EquipmentCategoryService {
  create(createEquipmentCategoryDto: CreateEquipmentCategoryDto) {
    return prisma.equipmentCategory.create({
      data: {
        name: createEquipmentCategoryDto.name,
      },
    });

  }

  @Get('getAll')
  findAll() {
    return prisma.equipmentCategory.findMany();
  }

  findOne(id: number) {
    return prisma.equipmentCategory.findUnique({
      where: {
        id: id
      },
    });
  }

  update(id: number, updateEquipmentCategoryDto: UpdateEquipmentCategoryDto) {
    return prisma.equipmentCategory.update({
      where: {
        id: id
      },
      data: {
        name: updateEquipmentCategoryDto.name,
      },
    });
  }

  remove(id: number) {
    return prisma.equipmentCategory.delete({
      where: {
        id: id
      },
    });
  }
}
