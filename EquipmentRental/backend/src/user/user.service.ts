import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
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


  connect(data: any) {

    const { authenticate } = require('ldap-authentication')

    async function auth() {
      // auth with admin
      // let options = {
      //   ldapOpts: {
      //     url: 'ldap://ldap.forumsys.com',
      //     // tlsOptions: { rejectUnauthorized: false }
      //   },
      //   adminDn: 'cn=read-only-admin,dc=example,dc=com',
      //   adminPassword: 'password',
      //   userPassword: 'password',
      //   userSearchBase: 'dc=example,dc=com',
      //   usernameAttribute: 'uid',
      //   username: 'gauss',
      //   // starttls: false
      // }

      // let user = await authenticate(options)
      // console.log(user)

      // auth with regular user
      let options = {
        ldapOpts: {
          url: 'ldap://ldap.forumsys.com',
          // tlsOptions: { rejectUnauthorized: false }
        },
        userDn: 'uid=einstein,dc=example,dc=com',
        userPassword: 'password',
        userSearchBase: 'dc=example,dc=com',
        usernameAttribute: 'uid',
        username: 'einstein',
        // starttls: false
      }

      let user = await authenticate(options)
      console.log(user)
    }

    auth()


  }

}
