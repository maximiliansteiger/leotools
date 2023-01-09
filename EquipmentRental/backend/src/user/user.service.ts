import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { authenticate } from 'ldap-authentication';


import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return prisma.user.create({
      data:
        createUserDto
    });
  }

  
  findAll() {
    return prisma.user.findMany();
  }

  findOne(id: number) {
    return prisma.user.findUnique({
      where: {
        id: id
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return prisma.user.update({
      where: {
        id: id
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return prisma.user.delete({
      where: {
        id: id
      },
    });
  }

  async connect(data: any) {

    const ldap = require('ldapjs');

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
    // let authenticated = await authenticate({
    //   ldapOpts: { url: 'ldaps://addc01.edu.htl-leonding.ac.at:636' },
    //   userDn: `uid=${data.username}@EDU,ou=Students,ou=HTL,dc=EDU,dc=HTL-LEONDING,dc=AC,dc=AT`,
    //   userPassword: data.password,
    // })

    // let authenticate = (userId, password) => {
    //   return new Promise((resolve, reject) => {
    //     const ldapClient = ldap.createClient(ldapOptions);

    //     ldapClient.bind(
    //       'cn=' + userId + ',' + ldapConfig.domain,
    //       password,
    //       (err, res) => {
    //         if (err) {
    //           //@see https://github.com/mcavage/node-ldapjs/blob/7059cf6b8a0b4ff4c566714d97f3cef04f887c3b/test/client.test.js @ 305
    //           return reject(err);
    //         }
    //         ldapClient.unbind();
    //         return resolve(res);
    //       }
    //     );
    //   }
    // };

    // // let user = await authenticate(options)
    // console.log(`user = ${JSON.stringify(authenticated, null, 2)}`)


    var LdapStrategy = require('passport-ldapauth');
    var passport = require('passport');

    passport.use(new LdapStrategy({
      server: {
        url: 'ldap://localhost:389',
      }
    }));



  }

}
