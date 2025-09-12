import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import type { UserBodyProps, UserRegisterProps } from './type';

@Controller('api/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('login')
    async getUser(
        @Body() body: UserBodyProps
    ): Promise<{id: number}> {
        return await this.userService.getUser(body);
    }

    @Post('register')
    async postUser(
        @Body() body: UserRegisterProps
    ): Promise<{id: number}> {
        return await this.userService.postUser(body);
    }
}
