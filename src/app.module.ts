import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user';
import { MentorModule } from './domains/mentor/mentor.module';
import { Mentor } from './models/mentor/mentor';
import { Student } from './models/student/student';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mahdi',
      password: 'ThisIsNotMe1>',
      database: 'inspire_nest',
      entities: [User, Mentor, Student],
      synchronize: true,
    }),
    MentorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
