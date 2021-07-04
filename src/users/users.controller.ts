import { Body, Controller, Get, ParseUUIDPipe, Post, Query } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get('test')
    async test(): Promise<String> {
        return "Hello world!"
    }

    @Get()
    async findUser(@Query('id', ParseUUIDPipe) id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Post('create')
    async createUser(@Body() createUserInput: CreateUserInput): Promise<User> {
        return this.usersService.create(createUserInput)
    }
}
