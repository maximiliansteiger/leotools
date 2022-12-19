import { Controller, Get, Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Workbook } from 'exceljs';
import * as temp from 'temp';
import { writeFile } from 'fs/promises';
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

  async downloadEquipmentAsCSV() {

    this.findAll().then(async (data) => {
      if (data.length > 0) {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Equipment');
        worksheet.columns = [
          { header: 'Typ', key: 'type', width: 30 },
          { header: 'Name', key: 'name', width: 30 },
          { header: 'Status', key: 'status', width: 30 },
          { header: 'Seriennummer', key: 'serialNumber', width: 30 },
          { header: 'Anlagenummer', key: 'anlagenummer', width: 30 },
          { header: 'Notizen', key: 'notes', width: 30 },
        ];
        data.forEach((equipment: any) => {
          worksheet.addRow({
            type: equipment.EquipmentType.name,
            name: equipment.name,
            status: equipment.status,
            serialNumber: equipment.serialNumber,
            anlagenummer: equipment.anlagenummer,
            notes: equipment.notes
          });
        }
        );
        const tempFile = temp.openSync({ suffix: '.xlsx' });
        await workbook.xlsx.writeFile(temp
          .path({ suffix: '.xlsx' }));
        return tempFile.path;
      }
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
      return 'Professionelles Videosystem';
    case 'SS':
      return 'Schwebestativ';
    case 'LV':
      return 'Videolampe';
    case 'VO':
      return 'Videoobjektiv';
    case 'VZ':
      return 'Videozubehör';
    case 'VL':
      return 'Videolicht';
    default:
      return name;
  }
}