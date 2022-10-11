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
    let fileData!: any;
    fs.readFile('./uploads/' + file.filename, 'utf8', function (err, data) {
      if (err) throw err;
      // console.log(data);
      fileData = data;

      // go through each line and split by ; then create json opbject containing: set, name, typ, serialNumber, notes, anlagenummer

      let fileDataArray = fileData.split('\r\n');
      fileDataArray.shift();
      fileDataArray.forEach(function (line: any) {
        let lineArray = line.split(';');
        if (lineArray[0].length > 1) {
          let equipment:CreateEquipmentDto = {
            set: lineArray[0],
            name: lineArray[1],
            equipmentTypeId: 1, // TODO: get equipmentTypeId from equipmentType table based on name
            status: "Available",
            serialNumber: lineArray[3],
            notes: lineArray[4],
            anlagenummer: lineArray[5]
          };

          prisma.equipment.create({
            data: equipment,
          }).catch((e) => {
            console.log(e);
          });
        
          console.log(equipment);
        }
      });



    });
    //delete file
    // fs.unlink('./uploads/' + file.filename, function (err) {
    //   if (err) throw err;
    //   console.log('File deleted!');
    // });



    



  }
}
