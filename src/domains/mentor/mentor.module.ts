import { Module } from '@nestjs/common';
import { MentorController } from './controllers/mentor/mentor.controller';
import { MentorService } from './services/mentor/mentor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mentor } from 'src/models/mentor/mentor';
import { User } from 'src/models/user';

@Module({
  imports: [TypeOrmModule.forFeature([Mentor, User])],
  controllers: [MentorController],
  providers: [MentorService],
})
export class MentorModule {}
