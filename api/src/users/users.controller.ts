import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @UseInterceptors(NoFilesInterceptor())
  create(@Body() requst: CreateUserRequest) {
    return this.userService.createUser(requst);
  }
}
