import { User } from 'src/auth/user';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Mentor {
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
