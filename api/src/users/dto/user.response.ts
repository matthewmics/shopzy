export class UserResponse {
  readonly id: number;
  readonly email: string;

  constructor(partial: Partial<UserResponse> = {}) {
    Object.assign(this, partial);
  }
}
