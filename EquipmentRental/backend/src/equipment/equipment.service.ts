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

  public getFullTypeName(name: any): any {
    console.log(name);
    let text = name.replace(/\d/g, '');
    text = text.replace(/\s/g, '');
    switch (text) {
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

  insertFile(file: any) {
    let fileData!: any;
    fs.readFile('./uploads/' + file.filename, 'latin1', function (err, data) {
      if (err) throw err;
      fileData = data;
      // go through each line and split by ; then create json object containing: set, name, typ, serialNumber, notes, anlagenummer
      let fileDataArray = fileData.split('\r\n');
      fileDataArray.shift();
      fileDataArray.forEach(async function (line: any) {
        let lineArray = line.split(';');
        if (lineArray[0].length > 0) {

          let typeName = lineArray[0].replace(/\d/g, ''); // VK 02 -> VK
          typeName = typeName.replace(/\s/g, '');
          try {
            const type = await prisma.equipmentType.upsert({
              where: {
                name: typeName,
              },
              update: {
                name: typeName,
                description: typeName
              },
              create: {
                name: typeName,
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
          // delete file
        }
      });
    });
    fs.unlink('./uploads/' + file.filename, function (err) {
      if (err) throw err;
      console.log('File deleted!');
    });
  }
}
