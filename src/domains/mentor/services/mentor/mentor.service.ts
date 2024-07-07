import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mentor } from 'src/models/mentor/mentor';
import { CreateMentorDto } from 'src/models/mentor/mentor-dto';
import { User } from 'src/models/user';
import { Repository } from 'typeorm';

@Injectable()
export class MentorService {
  constructor(
    @InjectRepository(Mentor) private mentorRepository: Repository<Mentor>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findById(id: number): Promise<Mentor> {
    return this.mentorRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async create(mentorDto: CreateMentorDto) {
    const mentor = this.mentorRepository.create(mentorDto);
    const user = await this.userRepository.findOne({
      where: { id: mentorDto.userId },
    });
    if (user) {
      mentor.user = user;
      return await this.mentorRepository.save(mentor);
    }
    throw new NotFoundException('User Not Found ');
  }
}
