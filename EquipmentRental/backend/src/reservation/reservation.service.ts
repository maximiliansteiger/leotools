import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ReservationService {
  create(createReservationDto: CreateReservationDto) {
    return prisma.reservation.create({
      data: createReservationDto
    });
  }

  findAll() {
    return prisma.reservation.findMany({
      include: {
        equipment: true,
        user: true
      },
    });
  }

  findOne(id: number) {
    return prisma.reservation.findUnique({
      where: {
        id: id
      },
      include: {
        equipment: true,
        user: true
      },
    });

  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return prisma.reservation.update({
      where: {
        id: id
      },
      data: updateReservationDto,
      include: {
        equipment: true,
        user: true
      },
    });
  }

  remove(id: number) {
    return prisma.reservation.delete({
      where: {
        id: id
      },
      include: {
        equipment: true,
        user: true
      },
    });
  }
}
