import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { CreateUserDto } from 'src/models/user-dto/user-dto';

@Controller('user')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('authenticate/:id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const res = this.authService.findById(id);
    return res;
  }

  @Post('add')
  // @HttpCode(204)
  async addUser(@Body() user: CreateUserDto) {
    try {
      const res = await this.authService.create(user);
      console.log('called');

      return { user: res };
    } catch (e) {
      throw new HttpException(e.message, 400);
    }
  }
}
