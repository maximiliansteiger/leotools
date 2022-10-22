import { Injectable } from '@nestjs/common';
import { CreateEquipmentTypeDto } from './dto/create-equipment-type.dto';
import { UpdateEquipmentTypeDto } from './dto/update-equipment-type.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class EquipmentTypeService {
  create(createEquipmentTypeDto: CreateEquipmentTypeDto) {
    return prisma.equipmentType.create({
      data: 
        createEquipmentTypeDto
    });
  }

  findAll() {
    return prisma.equipmentType.findMany();
  }

  findOne(id: number) {
    return prisma.equipmentType.findUnique({
      where: {
        id: id
      },
    });

  }

  update(id: number, updateEquipmentTypeDto: UpdateEquipmentTypeDto) {
    return prisma.equipmentType.update({
      where: {
        id: id
      },
      data: {
        name: updateEquipmentTypeDto.name,
      },
    });
  }

  remove(id: number) {
    return prisma.equipmentType.delete({
      where: {
        id: id
      },
    });
  }
}
