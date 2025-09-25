import { IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserRequest {
  @IsEmail()
  readonly email: string;

  @IsStrongPassword()
  readonly password: string;

  constructor(partial: Partial<CreateUserRequest> = {}) {
    Object.assign(this, partial);
  }
}
