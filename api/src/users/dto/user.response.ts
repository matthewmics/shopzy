import { Expose } from 'class-transformer';

export class UserResponse {
  @Expose()
  readonly id: number;

  @Expose()
  readonly email: string;

  constructor(partial: Partial<UserResponse> = {}) {
    Object.assign(this, partial);
  }
}
