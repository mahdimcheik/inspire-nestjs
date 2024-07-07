import { Module } from '@nestjs/common';
import { User } from './user';

@Module({
  exports: [AuthModule],
  imports: [User],
})
export class AuthModule {}
