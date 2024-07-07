import { User } from 'src/models/user';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  imgUrl: string;

  @Column()
  githubUrl: string;

  @Column()
  linkedinUrl: string;

  @Column()
  description: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
