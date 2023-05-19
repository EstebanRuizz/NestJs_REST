import { UsersService } from './users.service';
import { User } from './user.entity';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return await this.UsersService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.UsersService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    } else {
      return user;
    }
  }
  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.UsersService.create(user);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return await this.UsersService.update(id, user);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const user = await this.UsersService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    return this.UsersService.delete(id);
  }
}
