import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user';
import { CreateUserDto } from 'src/models/user-dto/user-dto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findById(id: number): Promise<User[]> {
    return this.userRepository.findBy({ id });
  }

  create(userDto: CreateUserDto) {
    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }
}
