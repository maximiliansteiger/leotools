import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { authenticate } from 'ldap-authentication';


import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return prisma.user.findMany();;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async connect(data: any) {

    // auth with regular user
    // let options = {
    //   ldapOpts: {
    //     url: 'ldap://addc01.edu.htl-leonding.ac.at',
    //     tlsOptions: { rejectUnauthorized: false }
    //   },
    //   userDn: 'ou=HTL,dc=EDU,dc=HTL-LEONDING,dc=AC,dc=AT',
    //   userPassword: data.password,
    //   usernameAttribute: 'uid',
    //   username: data.username,
    //   // starttls: false
    // }
    let authenticated = await authenticate({
      ldapOpts: { url: 'ldap://addc01.edu.htl-leonding.ac.at' },
      userDn: `uid=${data.username},ou=HTL,dc=EDU,dc=HTL-LEONDING,dc=AC,dc=AT`,
      userPassword: data.password,
    })

    // let user = await authenticate(options)
    console.log(`user = ${JSON.stringify(authenticated, null, 2)}`)


  }

}
