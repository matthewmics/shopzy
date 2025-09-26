import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import * as bcrypt from 'bcrypt';
import { UserResponse } from './dto/user.response';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data: CreateUserRequest): Promise<UserResponse> {
    const existingUser = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (existingUser) {
      throw new UnprocessableEntityException('Email already exists');
    }

    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: await bcrypt.hash(data.password, 10),
      },
    });

    return plainToInstance(UserResponse, user, {
      excludeExtraneousValues: true,
    });
  }
}
