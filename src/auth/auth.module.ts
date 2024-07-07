import { Module } from '@nestjs/common';
import { User } from '../models/user';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  exports: [AuthModule],
  imports: [User, TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, Repository],
})
export class AuthModule {}
