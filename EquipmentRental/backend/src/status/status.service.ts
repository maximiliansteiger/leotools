import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


@Injectable()
export class StatusService {
  create(createStatusDto: CreateStatusDto) {
    return prisma.status.create({
      data:
        createStatusDto
    });
  }

  findAll() {
    return prisma.status.findMany();
  }

  findOne(id: number) {
    return prisma.status.findUnique({
      where: {
        id: id
      },
    });
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return prisma.status.update({
      where: {
        id: id
      },
      data: updateStatusDto,
    });
  }

  remove(id: number) {
    return prisma.status.delete({
      where: {
        id: id
      },
    });
  }
}
