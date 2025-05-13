import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { CreateUserDTO } from './dto/create-user.dto';
import { PROVIDERS } from 'src/const/PROVIDERS';

@Injectable()
export class UsersService {
  constructor(@Inject(PROVIDERS.USERS) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDTO) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
  }
}
