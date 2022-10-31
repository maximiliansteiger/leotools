import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


@Injectable()
export class RoleService {
  create(createRoleDto: CreateRoleDto) {
    return prisma.role.create({
      data:
        createRoleDto
    });
  }

  findAll() {
    return prisma.role.findMany();
  }

  findOne(id: number) {
    return prisma.role.findUnique({
      where: {
        id: id
      },
    });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return prisma.role.update({
      where: {
        id: id
      },
      data: updateRoleDto,
    });
  }

  remove(id: number) {
    return prisma.role.delete({
      where: {
        id: id
      },
    });
  }
}
