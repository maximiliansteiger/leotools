import { Controller, Get, Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

import * as fs from 'fs';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class EquipmentService {
  create(createEquipmentDto: CreateEquipmentDto) {
    return prisma.equipment.create({
      data: createEquipmentDto,
    });
  }


  findAll() {
    return prisma.equipment.findMany({
      include: {
        EquipmentType: true
      },
    });
  }

  findOne(id: number) {
    return prisma.equipment.findUnique({
      where: {
        id: id
      },
      include: {
        EquipmentType: true
      },
    });
  }

  update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return prisma.equipment.update({
      where: {
        id: id
      },
      data: updateEquipmentDto,
      include: {
        EquipmentType: true
      },
    });
  }

  remove(id: number) {
    return prisma.equipment.delete({
      where: {
        id: id
      },
      include: {
        EquipmentType: true
      },
    });
  }



  insertFile(file: any) {
    fs.readFile('./uploads/' + file.filename, 'latin1', function (err, data) {
      if (err) throw err;
      let fileDataArray = data.split('\r\n');
      fileDataArray.shift();
      fileDataArray.forEach(async function (line: any) {
        let lineArray = line.split(';');
        if (lineArray[0].length > 0) {
          let typeName = lineArray[0].replace(/[0-9 ]+/g, ''); // VK 02 -> VK
          try {

            let name = getFullTypeName(typeName);

            const type = await prisma.equipmentType.upsert({
              where: {
                name,
              },
              update: {
                name,
                description: typeName
              },
              create: {
                name,
                description: typeName
              }
            });
            await prisma.equipment.create({
              data: {
                set: lineArray[0],
                name: lineArray[1],
                EquipmentType: {
                  connect: {
                    id: type.id
                  }
                },
                status: "Available",
                serialNumber: lineArray[3],
                notes: lineArray[4],
                anlagenummer: lineArray[5]
              },
            });
          } catch (error) {
          }
        }
      });
    });
    fs.unlink('./uploads/' + file.filename, function (err) {
      if (err) throw err;
      console.log('File deleted!');
    });
  }


  findByType(id: number) {
    return prisma.equipment.findMany({
      where: {
        equipmentTypeId: +id
      },
      include: {
        EquipmentType: true
      },
    });
  }



}

export function getFullTypeName(name: any): any {
  switch (name) {
    case 'VK':
      return 'Videokamera';
    case 'S':
      return 'Stativ';
    case 'PVS':
      return 'PVS';
    case 'SS':
      return 'Schwebestativ';
    case 'LV':
      return 'Videolampe';
    case 'VO':
      return 'Videoobjektiv';
    case 'VZ':
      return 'Videozubehör';
    default:
      return name;
  }
}
