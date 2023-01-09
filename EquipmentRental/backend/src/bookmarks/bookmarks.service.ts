import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';


import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class BookmarksService {
  create(createBookmarkDto) {
    const { userId, equipmentId } = createBookmarkDto;
    console.log(userId, equipmentId);

    return prisma.bookmarks.create({
      data: {
        user: {
          connect: {
            id: userId
          }
        },
        equipment: {
          connect: {
            id: equipmentId
          }
        },
      }
    })
  }


  findAll() {
    return prisma.bookmarks.findMany();
  }

  findOne(id: number) {
    return prisma.bookmarks.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateBookmarkDto: UpdateBookmarkDto) {
    return prisma.bookmarks.update({
      where: {
        id
      },
      data: updateBookmarkDto
    });
  }

  remove(id: number) {
    return prisma.bookmarks.delete({
      where: {
        id: id
      },
    });

  }

  findByUser(id: number) {
    return prisma.bookmarks.findMany({
      where: {
        userId: +id
      },
    });
  }


}
