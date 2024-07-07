import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { MentorService } from '../../services/mentor/mentor.service';
import { CreateMentorDto } from 'src/models/mentor/mentor-dto';

@Controller('mentor')
export class MentorController {
  constructor(private mentorService: MentorService) {}
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const res = this.mentorService.findById(id);
    return res;
  }
  @Post('add')
  async addUser(@Body() mentor: CreateMentorDto) {
    try {
      const res = await this.mentorService.create(mentor);
      return { mentor: res };
    } catch (e) {
      throw new HttpException(e.message, 400);
    }
  }
}
