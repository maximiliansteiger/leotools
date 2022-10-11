import { Injectable } from '@nestjs/common';
import { CreateEquipmentTypeDto } from './dto/create-equipment-type.dto';
import { UpdateEquipmentTypeDto } from './dto/update-equipment-type.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class EquipmentTypeService {
  create(createEquipmentTypeDto: CreateEquipmentTypeDto) {
    return 'This action adds a new equipmentType';
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
    return `This action removes a #${id} equipmentType`;
  }
}
