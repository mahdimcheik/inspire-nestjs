export class CreateMentorDto {
  firstname: string;

  lastname: string;

  imgUrl: string;

  githubUrl: string;

  linkedinUrl: string;

  description: string;

  userId: number;
}

export class UpdateMentorDto {
  id: number;

  firstname: string;

  lastname: string;

  imgUrl: string;

  githubUrl: string;

  linkedinUrl: string;

  description: string;

  userId: number;
}
