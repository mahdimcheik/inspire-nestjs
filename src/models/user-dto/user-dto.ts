export class CreateUserDto {
  email: string;

  password: string;

  role: 'MENTOR' | 'STUDENT' | 'ADMIN';
}

export class UpdateUserDto {
  id: number;

  email: string;

  password: string;

  role: 'MENTOR' | 'STUDENT' | 'ADMIN';
}
